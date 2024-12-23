import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { PlacesList } from "../components/PlacesList";
import { LocalBusinessSchema } from "../types/seo";
import { categories } from "../data/categories";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FAQSection } from "../components/FAQSection";
import { PageHeader } from "../components/PageHeader";

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

    // Handle special categories
    const specialCategories: Record<string, any> = {
      "decoration": {
        title: "Wedding Decoration Services",
        description: "Professional wedding decoration services in Hyderabad",
        content: "Transform your wedding venue with our professional decoration services. From elegant floral arrangements to stunning lighting and themed setups, our expert decorators create magical atmospheres for your special day. We offer comprehensive decoration solutions including stage design, mandap decoration, and customized themes."
      },
      "kids-entertainment": {
        title: "Kids Entertainment Services",
        description: "Professional kids entertainment services for weddings in Hyderabad",
        content: "Make your wedding celebration fun for all ages with our professional kids entertainment services. We offer a variety of entertainment options including games, activities, face painting, balloon art, and dedicated child care professionals to keep young guests engaged and happy throughout your event."
      }
    };

    if (specialCategories[categorySlug]) {
      return specialCategories[categorySlug];
    }

    // Handle decoration subcategories
    const decorationSubcategories = ["floral-decor", "lighting", "theme-decor", "stage-design"];
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

    // Find category in categories array as fallback
    const categoryData = categories.find(cat => cat.link === categorySlug);
    if (categoryData) {
      return {
        title: categoryData.title,
        description: categoryData.description,
        content: `Discover the best ${categoryData.title.toLowerCase()} services for your wedding celebration in Hyderabad. Our professional vendors provide high-quality services tailored to your specific needs and preferences.`
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
  const isCharminarWeddingHalls = area.slug === "charminar" && category === "wedding-halls";
  
  const pageTitle = isCharminarWeddingHalls 
    ? "Wedding Venues Near Charminar | Historic Wedding Halls in Old City Hyderabad"
    : `Best ${categoryInfo.title} in ${locationString}`;
    
  const pageDescription = isCharminarWeddingHalls
    ? "Discover magnificent wedding venues near Charminar in Old City, Hyderabad. Our handpicked wedding halls blend historic charm with modern amenities, perfect for traditional Hyderabadi weddings near the iconic Charminar."
    : `Find the finest ${categoryInfo.title.toLowerCase()} in ${locationString}. We offer premium services with experienced professionals, customized packages, and top-quality service for your wedding celebration.`;

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

  const getCustomContent = () => {
    if (isCharminarWeddingHalls) {
      return "Discover the perfect wedding venue near the iconic Charminar in Old City, Hyderabad. Our curated selection of wedding halls combines the rich heritage of the Charminar area with modern amenities. These venues offer a unique blend of traditional Hyderabadi architecture and contemporary facilities, making them ideal for couples seeking a wedding celebration with historic charm. Located in the heart of Old City, these wedding halls provide excellent accessibility and a picturesque backdrop of Charminar for your special day. From intimate nikah ceremonies to grand wedding receptions, our venues can accommodate celebrations of various sizes while maintaining the cultural essence of Old City Hyderabad.";
    }
    return categoryInfo.content;
  };

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: categoryInfo.title, link: `/category/${category}` },
    { label: mainLocation.name, link: `/location/${location}` },
    { label: area.name },
  ];

  const faqQuestions = [
    {
      question: "What makes Charminar area special for wedding venues?",
      answer: "The Charminar area offers a unique blend of historical charm and cultural significance. Wedding venues here provide a traditional Hyderabadi atmosphere with the iconic Charminar as a backdrop, making your celebration truly memorable."
    },
    {
      question: "What types of wedding venues are available near Charminar?",
      answer: "Near Charminar, you'll find various wedding venues including traditional marriage halls, heritage properties, and modern banquet halls. These venues can accommodate both intimate nikah ceremonies and grand wedding receptions."
    }
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `wedding halls near charminar`,
          `wedding venues charminar`,
          `marriage halls old city hyderabad`,
          `wedding venues near charminar hyderabad`,
          `traditional wedding halls charminar`,
          `best wedding venues old city`,
          `nikah halls near charminar`,
          `wedding reception venues charminar`,
          `affordable wedding halls old city`,
          `luxury wedding venues near charminar`
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/category/${category}/${location}/${subLocation}`}
        schema={localBusinessSchema}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <PageHeader 
          title={isCharminarWeddingHalls ? '' : `${categoryInfo.title} in ${locationString}`}
          isCharminarWeddingHalls={isCharminarWeddingHalls}
        />

        <CategoryContent 
          title={categoryInfo.title}
          description={categoryInfo.description}
          content={getCustomContent()}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Available {categoryInfo.title} in {locationString}
          </h2>
          <PlacesList 
            query={`${categoryInfo.title} in ${locationString}`}
            location={area.location || { lat: 17.3850, lng: 78.4867 }}
          />
        </div>

        <FAQSection 
          title="Frequently Asked Questions About Wedding Venues Near Charminar"
          questions={faqQuestions}
        />
      </main>
    </>
  );
};

export default CategoryLocationPage;
