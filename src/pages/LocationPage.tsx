import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { locations } from "../data/locations";
import { LocationCard } from "../components/LocationCard";
import { ScrollArea } from "../components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LocationPage = () => {
  const { location } = useParams();
  const locationData = locations.find(loc => loc.slug === location);

  if (!locationData) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-display font-bold mb-6">Location Not Found</h1>
          <p className="text-gray-600 mb-8">The location you're looking for doesn't exist.</p>
          <Link to="/locations" className="text-primary hover:underline">
            View all locations
          </Link>
        </div>
      </>
    );
  }

  const pageTitle = `Wedding Venues & Services in ${locationData.name}, Hyderabad`;
  const pageDescription = `Discover the best wedding venues and services in ${locationData.name}, Hyderabad. We offer premium wedding halls, function venues, and complete wedding services with state-of-the-art facilities. Find and book trusted venues in ${locationData.name} for your perfect wedding celebration.`;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `wedding venues ${locationData.name.toLowerCase()}`,
          `marriage halls ${locationData.name.toLowerCase()}`,
          `wedding services ${locationData.name.toLowerCase()} hyderabad`,
          `${locationData.name.toLowerCase()} wedding locations`,
          `best wedding venues in ${locationData.name.toLowerCase()}`
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/location/${location}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-6">
          Wedding Venues & Services in {locationData.name}
        </h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600">
            Planning a wedding in {locationData.name}? Explore our curated selection of premium wedding venues and comprehensive wedding services. From traditional marriage halls to modern banquet facilities, we offer the perfect venues for your special day in {locationData.name}. Each venue is equipped with modern amenities and supported by professional services to ensure a memorable celebration.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            {locationData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <LocationCard
              name={locationData.name}
              image={locationData.image}
              link={`/location/${locationData.slug}`}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ScrollArea className="h-[400px] p-4">
              <h3 className="text-lg font-display font-semibold mb-4">Areas in {locationData.name}</h3>
              <div className="space-y-2">
                {locationData.areas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/location/${locationData.slug}/${area.slug}`}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group"
                  >
                    <span className="text-gray-700 group-hover:text-primary">{area.name}</span>
                    <ChevronRight size={16} className="ml-2 text-gray-400 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </>
  );
};

export default LocationPage;