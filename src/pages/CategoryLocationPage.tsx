import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categories } from "../data/categories";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";

const CategoryLocationPage = () => {
  const { category, location } = useParams();
  
  // Find the category data
  const categoryData = categories.find(cat => cat.link === category);
  
  // Find location data by checking both main locations and their areas
  const mainLocation = locations.find(loc => 
    loc.slug === location || 
    loc.areas.some(area => area.slug === location)
  );

  // Find the specific area if it exists
  const area = mainLocation?.areas.find(area => area.slug === location);

  if (!categoryData || !mainLocation || !area) {
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

  // Default coordinates for Hyderabad if location is not specified
  const defaultLocation = { lat: 17.3850, lng: 78.4867 };
  const areaLocation = area.location || defaultLocation;

  const pageTitle = `Best ${categoryData.title} in ${area.name}, ${mainLocation.name} | Book Top Wedding Services`;
  const pageDescription = `Discover premium ${categoryData.title.toLowerCase()} services in ${area.name}, ${mainLocation.name}. Compare prices, check availability, and book trusted vendors for your special day.`;
  
  const keywords = [
    `${categoryData.title} ${area.name}`,
    `wedding ${categoryData.title} ${area.name}`,
    `${mainLocation.name} wedding ${categoryData.title}`,
    `best wedding ${categoryData.title} ${area.name}`,
    `affordable ${categoryData.title} ${area.name}`,
    `top rated ${categoryData.title} ${mainLocation.name}`,
    `professional ${categoryData.title.toLowerCase()} services`,
    `wedding services ${area.name}`,
    `${categoryData.title} near me`
  ];

  // Structured Data for Local Business
  const localBusinessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${categoryData.title} in ${area.name}`,
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
            <li className="text-gray-600">{categoryData.title} in {area.name}</li>
          </ol>
        </nav>

        <CategoryContent 
          title={`${categoryData.title} in ${area.name}`}
          description={categoryData.description}
          content={`Find the best ${categoryData.title.toLowerCase()} services in ${area.name}, ${mainLocation.name}.`}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Available {categoryData.title} in {area.name}
          </h2>
          <PlacesList 
            query={`${categoryData.title} in ${area.name}, ${mainLocation.name}`}
            location={areaLocation}
          />
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;