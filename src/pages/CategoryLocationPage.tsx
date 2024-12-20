import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";

const CategoryLocationPage = () => {
  const { location, subLocation, category } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);
  const categoryInfo = categoryDescriptions[category as keyof typeof categoryDescriptions];

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
  const pageDescription = `Find and compare the best ${categoryInfo.description.toLowerCase()} in ${area.name}, ${mainLocation.name}. Get quotes, check availability, and book trusted vendors for your wedding celebration.`;
  const keywords = [
    `${category} ${area.name}`,
    `wedding ${category} ${area.name}`,
    `${mainLocation.name} wedding ${category}`,
    `best wedding ${category} ${area.name}`,
    `affordable ${category} ${area.name}`,
    `top rated ${category} ${mainLocation.name}`,
    `professional ${categoryInfo.title.toLowerCase()} services`,
    `wedding services hyderabad`,
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
    url: window.location.href,
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
        canonicalUrl={`https://yourwebsite.com/location/${location}/${subLocation}/${category}`}
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
            <li><a href={`/location/${location}`} className="text-primary hover:underline">{mainLocation.name}</a></li>
            <li className="text-gray-400">/</li>
            <li><a href={`/location/${location}/${subLocation}`} className="text-primary hover:underline">{area.name}</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{categoryInfo.title}</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            {pageDescription}
          </p>
          
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">
              Why Choose Our {categoryInfo.title} Services?
            </h2>
            <p>
              Discover the perfect {categoryInfo.title.toLowerCase()} for your wedding in {area.name}, {mainLocation.name}. 
              Our carefully selected vendors offer professional services, competitive prices, and exceptional quality.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Available {categoryInfo.title} in {area.name}
          </h2>
          <PlacesList 
            query={`${categoryInfo.title} in ${area.name}, ${mainLocation.name}`}
            location={areaLocation}
          />
        </div>

        <div className="mt-12 bg-secondary/50 rounded-lg p-8">
          <h2 className="text-2xl font-display font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How do I choose the right {categoryInfo.title.toLowerCase()}?</h3>
              <p className="text-gray-600">Consider factors like budget, experience, portfolio, and reviews. Our platform helps you compare different options easily.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's the typical price range for {categoryInfo.title.toLowerCase()} in {area.name}?</h3>
              <p className="text-gray-600">Prices vary based on requirements and package selection. Contact vendors directly for detailed quotes.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;