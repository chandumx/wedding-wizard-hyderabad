import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryContent } from "../components/categories/CategoryContent";
import { categoryDescriptions } from "../data/categoryDescriptions";
import { locations } from "../data/locations";

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
          <p className="text-center mt-4">
            The requested category or location could not be found.
          </p>
        </div>
      </>
    );
  }

  const title = `${categoryInfo.title} in ${area.name}, ${mainLocation.name} | Best Wedding Services`;
  const description = `Discover ${categoryInfo.description.toLowerCase()} in ${area.name}, ${mainLocation.name}. Compare prices and book trusted vendors for your wedding celebration.`;
  const keywords = `${category} ${area.name}, wedding ${category} ${area.name}, ${mainLocation.name} wedding ${category}, best wedding ${category} ${area.name}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={`https://yourwebsite.com/location/${location}/${subLocation}/${category}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <CategoryContent
          title={`${categoryInfo.title} in ${area.name}`}
          description={description}
          content={categoryInfo.content}
        />
      </main>
    </>
  );
};

export default CategoryLocationPage;