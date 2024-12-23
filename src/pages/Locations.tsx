import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { ScrollArea } from "../components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";

const Locations = () => {
  return (
    <>
      <SEOHead
        title="Wedding Venues by Location in Hyderabad | Find Local Wedding Services"
        description="Explore wedding venues and services across different areas of Hyderabad. Find the perfect location for your wedding celebration."
        keywords={[
          "wedding venues hyderabad",
          "wedding halls hyderabad locations",
          "wedding services hyderabad areas",
          "hyderabad wedding locations"
        ]}
        canonicalUrl="https://getmarriedinhyderabad.in/locations"
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">
          Wedding Venues & Services by Location
        </h1>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover wedding venues and services across Hyderabad's most popular areas. From the historic charm of Old City to the modern luxury of Jubilee Hills, find the perfect location for your celebration.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.slug} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <Link 
                to={`/location/${location.slug}`}
                className="text-xl font-display font-semibold hover:text-primary transition-colors mb-4 block"
              >
                {location.name}
              </Link>
              
              <ScrollArea className="h-64">
                <h3 className="text-lg font-display font-semibold mb-4">Areas in {location.name}</h3>
                <div className="space-y-2">
                  {location.areas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/location/${location.slug}/${area.slug}`}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group"
                    >
                      <span className="text-gray-700 group-hover:text-primary">{area.name}</span>
                      <ChevronRight size={16} className="ml-2 text-gray-400 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Locations;