import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";
import { ApiKeyInput } from "../components/ApiKeyInput";
import { PlacesList } from "../components/PlacesList";

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

  const title = `${categoryInfo.title} in ${area.name}, ${mainLocation.name}`;
  const description = `Discover ${categoryInfo.description.toLowerCase()} in ${area.name}, ${mainLocation.name}. Compare prices and book trusted vendors for your wedding celebration.`;

  // Default coordinates for Hyderabad if location is not specified
  const defaultLocation = { lat: 17.3850, lng: 78.4867 };
  const areaLocation = area.location || defaultLocation;

  return (
    <>
      <SEOHead
        title={`${title} | Best Wedding Services`}
        description={description}
        keywords={`${category} ${area.name}, wedding ${category} ${area.name}, ${mainLocation.name} wedding ${category}, best wedding ${category} ${area.name}`}
        canonicalUrl={`https://yourwebsite.com/location/${location}/${subLocation}/${category}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        
        <ApiKeyInput />
        
        <div className="mt-8">
          <PlacesList 
            query={`${categoryInfo.title} in ${area.name}, ${mainLocation.name}`}
            location={areaLocation}
          />
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;