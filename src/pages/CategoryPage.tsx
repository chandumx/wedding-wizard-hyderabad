import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { LocationCard } from "../components/LocationCard";
import { locations } from "../data/locations";

const CategoryPage = () => {
  const { category } = useParams();
  
  const categoryInfo = categoryDescriptions[category || ''];

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

  return (
    <>
      <SEOHead
        title={`${categoryInfo.title} Services in Hyderabad | Find Local Vendors`}
        description={categoryInfo.description}
        keywords={[
          `${category} hyderabad`,
          `wedding ${category} services`,
          `best ${category} hyderabad`,
          'wedding services hyderabad'
        ]}
        canonicalUrl={`https://yourwebsite.com/categories/${category}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <CategoryContent 
          title={categoryInfo.title}
          description={categoryInfo.description}
          content={categoryInfo.content}
        />
        
        <div className="mt-16 space-y-12">
          <h2 className="text-2xl font-display font-semibold">
            Available Locations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              location.areas.map((area) => (
                <LocationCard
                  key={`${location.slug}-${area.slug}`}
                  name={`${area.name}, ${location.name}`}
                  image={location.image}
                  vendorCount={area.vendorCount}
                  link={`/category/${category}/${location.slug}/${area.slug}`}
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