import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";
import { categories } from "../data/categories";

const CategoryLocationPage = () => {
  const { location, subLocation, category } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);

  const getCategoryInfo = (categorySlug: string | undefined) => {
    if (!categorySlug) return null;
    
    // Direct match in categoryDescriptions
    if (categoryDescriptions[categorySlug]) {
      return categoryDescriptions[categorySlug];
    }

    // Handle decoration category and its subcategories
    const decorationSubcategories = ["floral-decor", "lighting", "theme-decor", "stage-design"];
    
    if (categorySlug === "decoration" || decorationSubcategories.includes(categorySlug)) {
      // If it's a subcategory, find its specific data
      if (decorationSubcategories.includes(categorySlug)) {
        const subcategoryData = categories.find(cat => cat.link === categorySlug);
        if (subcategoryData) {
          return {
            title: subcategoryData.title,
            description: subcategoryData.description,
            content: `Find professional ${subcategoryData.title.toLowerCase()} services for your wedding celebration. Our experienced decorators provide high-quality services tailored to your needs.`
          };
        }
      }
      
      // Return main decoration category data
      return {
        title: "Wedding Decoration Services",
        description: "Professional wedding decoration services in Hyderabad",
        content: "Transform your wedding venue with our professional decoration services. From elegant floral arrangements to stunning lighting and themed setups, our expert decorators create magical atmospheres for your special day. We offer comprehensive decoration solutions including stage design, mandap decoration, and customized themes."
      };
    }

    // Find category in categories array
    const categoryData = categories.find(cat => cat.link === categorySlug);
    if (categoryData) {
      return {
        title: categoryData.title,
        description: categoryData.description,
        content: `Find the best ${categoryData.title.toLowerCase()} services for your wedding celebration. Our professional vendors provide high-quality services tailored to your needs.`
      };
    }

    return null;
  };

  const categoryInfo = getCategoryInfo(category);

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

  const locationString = `${area.name}, ${mainLocation.name}`;
  const pageTitle = `Best ${categoryInfo.title} in ${locationString}`;
  const pageDescription = `Find the finest ${categoryInfo.title.toLowerCase()} in ${locationString}. We offer premium services with experienced professionals, customized packages, and top-quality service for your wedding celebration.`;

  // Default coordinates for Hyderabad if location is not specified
  const defaultLocation = { lat: 17.3850, lng: 78.4867 };
  const areaLocation = area.location || defaultLocation;

  // Structured Data for Local Business
  const localBusinessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${categoryInfo.title} in ${locationString}`,
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
    url: `https://getmarriedinhyderabad.in/category/${category}/${location}/${subLocation}`,
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
        keywords={[
          `${categoryInfo.title.toLowerCase()} ${area.name}`,
          `wedding ${categoryInfo.title.toLowerCase()} ${area.name}`,
          `${mainLocation.name} wedding ${categoryInfo.title.toLowerCase()}`,
          `best wedding ${categoryInfo.title.toLowerCase()} ${area.name}`,
          `affordable ${categoryInfo.title.toLowerCase()} ${area.name}`,
          `top rated ${categoryInfo.title.toLowerCase()} ${mainLocation.name}`,
          `professional wedding services ${area.name}`,
          `wedding services ${locationString}`,
          `${category} near me`
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/category/${category}/${location}/${subLocation}`}
        schema={localBusinessSchema}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <nav className="text-sm breadcrumbs mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="text-primary hover:underline">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href={`/category/${category}`} className="text-primary hover:underline">{categoryInfo.title}</a></li>
            <li className="text-gray-400">/</li>
            <li><a href={`/location/${location}`} className="text-primary hover:underline">{mainLocation.name}</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{area.name}</li>
          </ol>
        </nav>

        <CategoryContent 
          title={categoryInfo.title}
          description={categoryInfo.description}
          content={categoryInfo.content}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Available {categoryInfo.title} in {locationString}
          </h2>
          <PlacesList 
            query={`${categoryInfo.title} in ${locationString}`}
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