import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { locations } from "../data/locations";
import { categories } from "../data/categories";

const SubLocationPage = () => {
  const { location, subLocation } = useParams();
  
  const locationData = locations.find(loc => loc.slug === location);
  const areaData = locationData?.areas.find(area => area.slug === subLocation);

  if (!locationData || !areaData) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1>Location not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`Wedding Services in ${areaData.name}, ${locationData.name} | Get Married in Hyderabad`}
        description={`Find the best wedding services and vendors in ${areaData.name}, ${locationData.name}. Browse venues, caterers, photographers, and more.`}
        keywords={[
          `wedding venues ${areaData.name}`,
          `wedding services ${locationData.name}`,
          `marriage halls ${areaData.name}`,
          "wedding vendors hyderabad"
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/location/${location}/${subLocation}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold text-center mb-8">
          Wedding Services in {areaData.name}, {locationData.name}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard
              key={category.link}
              {...category}
              link={`/${category.link}-in-${subLocation}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default SubLocationPage;