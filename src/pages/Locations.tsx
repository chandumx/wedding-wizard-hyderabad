import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { LocationCard } from "../components/LocationCard";
import { locations } from "../data/locations";

const Locations = () => {
  return (
    <>
      <SEOHead
        title="Wedding Venues by Location in Hyderabad | Find Local Wedding Services"
        description="Explore wedding venues and services across different areas of Hyderabad. Find the perfect location for your wedding celebration."
        keywords="wedding venues hyderabad, wedding halls hyderabad locations, wedding services hyderabad areas"
        canonicalUrl="https://yourwebsite.com/locations"
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">
          Wedding Venues & Services by Location
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <LocationCard
              key={location.slug}
              name={location.name}
              image={location.image}
              vendorCount={location.vendorCount}
              link={`/location/${location.slug}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Locations;