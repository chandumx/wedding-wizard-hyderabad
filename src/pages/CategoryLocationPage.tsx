import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";

const CategoryLocationPage = () => {
  const { category, location } = useParams();
  
  // Clean up category name (replace hyphens with spaces)
  const cleanCategory = category?.replace(/-/g, ' ');
  
  // Find location data by checking both main locations and their areas
  const mainLocation = locations.find(loc => 
    loc.slug === location || 
    loc.areas.some(area => area.slug === location)
  );

  // Find the specific area if it exists
  const area = mainLocation?.areas.find(area => area.slug === location);

  // Get category info
  const categoryInfo = categoryDescriptions[cleanCategory as keyof typeof categoryDescriptions];

  if (!mainLocation || !area || !categoryInfo) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-center">Page not found</h1>
          <p className="text-center mt-4">
            The requested category or location could not be found.
          </p>
        </div>
      </>
    );
  }

  const pageTitle = `Best ${categoryInfo.title} in ${area.name}, ${mainLocation.name} | Book Top Wedding Services`;
  const pageDescription = `Discover premium ${categoryInfo.title.toLowerCase()} services in ${area.name}, ${mainLocation.name}. Compare prices, check availability, and book trusted vendors for your special day.`;
  
  const keywords = [
    `${cleanCategory} ${area.name}`,
    `wedding ${cleanCategory} ${area.name}`,
    `${mainLocation.name} wedding ${cleanCategory}`,
    `best wedding ${cleanCategory} ${area.name}`,
    `affordable ${cleanCategory} ${area.name}`,
    `top rated ${cleanCategory} ${mainLocation.name}`,
    `professional ${categoryInfo.title.toLowerCase()} services`,
    `wedding services ${area.name}`,
    `${cleanCategory} near me`
  ];

  // Default coordinates for Hyderabad if location is not specified
  const defaultLocation = { lat: 17.3850, lng: 78.4867 };
  const areaLocation = area.location || defaultLocation;

  // Structured Data for Local Business
  const localBusinessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${categoryInfo.title} in ${area.name}`,
    description: pageDescription,
    image: "/og-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: area.name,
      addressLocality: mainLocation.name,
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: areaLocation.lat,
      longitude: areaLocation.lng
    },
    url: `https://getmarriedinhyderabad.in/${category}-in-${location}`,
    telephone: "+91-1234567890",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "100"
    }
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={`https://getmarriedinhyderabad.in/${category}-in-${location}`}
        ogImage="/og-image.png"
        ogType="business.business"
        schema={localBusinessSchema}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <nav className="text-sm breadcrumbs mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="text-primary hover:underline">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href={`/location/${mainLocation.slug}`} className="text-primary hover:underline">{mainLocation.name}</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{categoryInfo.title} in {area.name}</li>
          </ol>
        </nav>

        <CategoryContent 
          title={`${categoryInfo.title} in ${area.name}`}
          description={categoryInfo.description}
          content={categoryInfo.content}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Available {categoryInfo.title} in {area.name}
          </h2>
          <PlacesList 
            query={`${categoryInfo.title} in ${area.name}, ${mainLocation.name}`}
            location={areaLocation}
          />
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;