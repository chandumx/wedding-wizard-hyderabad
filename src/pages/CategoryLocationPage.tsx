import { useParams, useNavigate, useLocation } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";
import { useEffect } from "react";

const CategoryLocationPage = () => {
  const { location, subLocation, category } = useParams();
  const navigate = useNavigate();
  const currentLocation = useLocation();
  
  // Handle URL format conversion
  useEffect(() => {
    if (currentLocation.pathname.includes('/category/')) {
      const categorySlug = category?.replace('wedding-halls', 'wedding-venues');
      navigate(`/${categorySlug}-in-${location}`, { replace: true });
    }
  }, [currentLocation, category, location, navigate]);

  // Extract category and location from hyphenated URL
  const urlParts = currentLocation.pathname.split('-in-');
  const categoryFromUrl = urlParts[0]?.replace('/', '');
  const locationFromUrl = urlParts[1];

  const mainLocation = locations.find(loc => 
    loc.slug === location || 
    loc.areas.some(area => area.slug === locationFromUrl)
  );
  
  const area = mainLocation?.areas.find(area => 
    area.slug === subLocation || 
    area.slug === locationFromUrl
  );

  const cleanCategory = (categoryFromUrl || category || '')
    .replace('wedding-venues', 'wedding-halls')
    .replace(/-/g, ' ');

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
    url: `https://getmarriedinhyderabad.in/location/${location}/${subLocation}/${category}`,
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
        canonicalUrl={`https://getmarriedinhyderabad.in/${categoryInfo.title.toLowerCase().replace(' ', '-')}-in-${area.slug}`}
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
          title={categoryInfo.title}
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

        <div className="mt-12 bg-secondary/50 rounded-lg p-8">
          <h2 className="text-2xl font-display font-semibold mb-4">
            Frequently Asked Questions About {categoryInfo.title} in {area.name}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What makes {area.name} an ideal location for weddings?</h3>
              <p className="text-gray-600">{area.name} is known for its excellent connectivity, diverse venue options, and rich cultural atmosphere, making it a perfect choice for wedding celebrations in {mainLocation.name}.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's the typical price range for {categoryInfo.title.toLowerCase()} in {area.name}?</h3>
              <p className="text-gray-600">Prices vary based on your specific requirements and package selection. Contact our verified vendors directly for detailed quotes tailored to your needs.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;