import { useParams, Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { LocationCard } from "../components/LocationCard";
import { locations } from "../data/locations";
import { categories } from "../data/categories";

const LocationPage = () => {
  const { location } = useParams();
  const locationData = locations.find(loc => loc.slug === location);

  if (!locationData) {
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
        title={`Wedding Services in ${locationData.name} | Get Married in Hyderabad`}
        description={`Find the best wedding services and vendors in ${locationData.name}. Browse venues, caterers, photographers, and more.`}
        keywords={[
          `wedding venues ${locationData.name}`,
          `wedding services ${locationData.name}`,
          `marriage halls ${locationData.name}`,
          "wedding vendors hyderabad"
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/location/${location}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold text-center mb-8">
          Wedding Services in {locationData.name}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link 
              key={category.link}
              to={`/${category.link}-in-${locationData.slug}`}
              className="block"
            >
              <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up bg-gradient-to-br from-secondary to-white">
                <div className="flex flex-col items-center space-y-4">
                  <category.icon size={32} className="text-primary animate-bounce" />
                  <h3 className="text-xl font-display font-semibold text-gray-900 hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-display font-bold text-center mb-8">
            Areas in {locationData.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationData.areas.map(area => (
              <LocationCard
                key={area.slug}
                name={area.name}
                link={`/location/${location}/${area.slug}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default LocationPage;
