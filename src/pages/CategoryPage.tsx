import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { LocationCard } from "../components/LocationCard";
import { locations } from "../data/locations";

const CategoryPage = () => {
  const { category } = useParams();
  
  // Remove the leading "categories/" if present in the URL
  const cleanCategory = category?.replace('categories/', '') || '';
  
  const categoryInfo = categoryDescriptions[cleanCategory];

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
    "name": `${categoryInfo.title} Services in Hyderabad`,
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
        title={`Best ${categoryInfo.title} Services in Hyderabad | Wedding Catering Services`}
        description={`Find the best ${categoryInfo.title.toLowerCase()} services in Hyderabad. Professional wedding catering services, customized menus, and experienced caterers for your special day.`}
        keywords={[
          `${cleanCategory} hyderabad`,
          `wedding ${cleanCategory} services`,
          `best ${cleanCategory} hyderabad`,
          'wedding services hyderabad',
          'wedding catering services',
          'professional caterers hyderabad'
        ]}
        canonicalUrl={`https://yourwebsite.com/categories/${category}`}
        schema={schema}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <CategoryContent 
          title={`${categoryInfo.title} Services in Hyderabad`}
          description={`Discover the finest ${categoryInfo.title.toLowerCase()} services in Hyderabad. We offer professional wedding catering solutions with customized menus and experienced service staff to make your celebration memorable.`}
          content={categoryInfo.content}
        />
        
        <div className="mt-16 space-y-12">
          <h2 className="text-2xl font-display font-semibold">
            Available Locations for {categoryInfo.title} Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              location.areas.map((area) => (
                <LocationCard
                  key={`${location.slug}-${area.slug}`}
                  name={`${categoryInfo.title} Services in ${area.name}, ${location.name}`}
                  image={location.image || "/placeholder.svg"}
                  link={`/category/${cleanCategory}/${location.slug}/${area.slug}`}
                />
              ))
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;