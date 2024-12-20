import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { LocationCard } from "../components/LocationCard";
import { locations } from "../data/locations";
import { categories } from "../data/categories";

const SubCategoryPage = () => {
  const { category } = useParams();
  
  const categoryInfo = categories.find(cat => cat.link === category);

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
        title={`${categoryInfo.title} Venues & Services in Hyderabad | Find Local Vendors`}
        description={`Discover ${categoryInfo.title.toLowerCase()} across different areas of Hyderabad. Compare prices and book trusted vendors for your celebration.`}
        keywords={[
          `${category} hyderabad`,
          `wedding ${category} hyderabad locations`,
          `${category} services hyderabad areas`,
          `best ${category} hyderabad`
        ]}
        canonicalUrl={`https://yourwebsite.com/categories/${category}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            {categoryInfo.title} in Hyderabad
          </h1>
          <p className="text-lg text-gray-600">
            {categoryInfo.description}. Browse through different locations and find the perfect venue for your celebration.
          </p>
        </div>
        
        <div className="space-y-12">
          {locations.map((location) => (
            <div key={location.slug} className="space-y-6">
              <h2 className="text-2xl font-display font-semibold border-b pb-2">{location.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.areas.map((area) => (
                  <LocationCard
                    key={area.slug}
                    name={area.name}
                    image="/placeholder.svg"
                    vendorCount={area.vendorCount}
                    link={`/location/${location.slug}/${area.slug}/${category}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SubCategoryPage;