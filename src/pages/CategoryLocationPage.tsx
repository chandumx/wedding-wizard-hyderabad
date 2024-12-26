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
  
  // Find location data
  const mainLocation = locations.find(loc => 
    loc.slug === location || 
    loc.areas.some(area => area.slug === location)
  );
  
  const area = mainLocation?.areas.find(area => area.slug === location);

  const categoryInfo = categoryDescriptions[cleanCategory as keyof typeof categoryDescriptions];

  if (!mainLocation || !area || !categoryInfo) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-center">Page not found</h1>
        </div>
      </>
    );
  }

  const pageTitle = `Best ${categoryInfo.title} in ${area.name}, ${mainLocation.name} | Book Top Wedding Services`;
  const pageDescription = `Discover premium ${categoryInfo.title.toLowerCase()} services in ${area.name}, ${mainLocation.name}. Located in the bustling commercial hub of Hyderabad, ${area.name} offers a perfect blend of traditional and modern wedding venues and services. Compare prices, check availability, and book trusted vendors for your special day.`;
  
  const keywords = [
    `${category} ${area.name}`,
    `wedding ${category} ${area.name}`,
    `${mainLocation.name} wedding ${category}`,
    `best wedding ${category} ${area.name}`,
    `affordable ${category} ${area.name}`,
    `top rated ${category} ${mainLocation.name}`,
    `professional ${categoryInfo.title.toLowerCase()} services`,
    `wedding services ${area.name}`,
    `${category} near me`
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