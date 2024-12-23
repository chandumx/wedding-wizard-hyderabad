import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";

const CategoryPage = () => {
  const { category } = useParams();
  
  // Remove the leading "categories/" if present in the URL
  const cleanCategory = category?.replace('categories/', '') || '';
  
  // Handle main categories and their subcategories
  const getCategoryInfo = (categorySlug: string) => {
    // Direct match
    if (categoryDescriptions[categorySlug]) {
      return categoryDescriptions[categorySlug];
    }

    // For main categories like "catering", find the first matching subcategory
    if (categorySlug === "catering") {
      return {
        title: "Wedding Catering Services",
        description: "Professional wedding catering services in Hyderabad offering traditional, multi-cuisine, and specialized food services",
        content: "Discover premium wedding catering services in Hyderabad that cater to all your culinary needs. From traditional Indian cuisine to international flavors, our professional catering services ensure a memorable dining experience for your wedding celebration. We offer customized menus, experienced staff, and impeccable service quality."
      };
    }

    return null;
  };

  const categoryInfo = getCategoryInfo(cleanCategory);

  if (!categoryInfo) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-center">Category not found</h1>
        </div>
      </>
    );
  }

  // Create SEO-optimized schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${categoryInfo.title} in Hyderabad`,
    "description": categoryInfo.description,
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wedding Wizard",
      "areaServed": "Hyderabad"
    }
  };

  return (
    <>
      <SEOHead
        title={`Best ${categoryInfo.title} in Hyderabad | Professional Wedding Services`}
        description={`Find the best ${categoryInfo.title.toLowerCase()} in Hyderabad. Professional wedding services, customized solutions, and experienced service providers for your special day.`}
        keywords={[
          `${cleanCategory} hyderabad`,
          `wedding ${cleanCategory} services`,
          `best ${cleanCategory} hyderabad`,
          'wedding services hyderabad',
          'professional wedding services',
          'wedding vendors hyderabad'
        ]}
        canonicalUrl={`https://yourwebsite.com/categories/${category}`}
        schema={schema}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <CategoryContent 
          title={`${categoryInfo.title} in Hyderabad`}
          description={categoryInfo.description}
          content={categoryInfo.content}
        />
        
        <div className="mt-16 space-y-12">
          <h2 className="text-2xl font-display font-semibold">
            Available Locations for {categoryInfo.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              location.areas.map((area) => (
                <div 
                  key={`${location.slug}-${area.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <Link
                    to={`/category/${cleanCategory}/${location.slug}/${area.slug}`}
                    className="block"
                  >
                    <h3 className="text-xl font-display font-semibold mb-2 text-primary hover:text-primary/80 transition-colors">
                      {categoryInfo.title} in {area.name}, {location.name}
                    </h3>
                  </Link>
                </div>
              ))
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;