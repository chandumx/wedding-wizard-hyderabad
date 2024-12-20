import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { 
  Store, 
  Camera, 
  Utensils, 
  Music2, 
  Car, 
  Sparkles,
  Hotel,
  Users
} from "lucide-react";
import { locations } from "../data/locations";

const categories = [
  {
    title: "Venues & Halls",
    icon: Store,
    description: "Wedding venues, banquet halls, and function spaces",
    link: "venues"
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Professional photographers and videographers",
    link: "photography"
  },
  {
    title: "Catering",
    icon: Utensils,
    description: "Catering services and food arrangements",
    link: "catering"
  },
  {
    title: "Music & Entertainment",
    icon: Music2,
    description: "DJs, bands, and entertainment groups",
    link: "entertainment"
  },
  {
    title: "Transportation",
    icon: Car,
    description: "Wedding cars, luxury vehicles, and transport services",
    link: "transportation"
  },
  {
    title: "Decoration",
    icon: Sparkles,
    description: "Wedding decorators and theme designers",
    link: "decoration"
  },
  {
    title: "Hotels",
    icon: Hotel,
    description: "Accommodation for guests",
    link: "hotels"
  },
  {
    title: "Wedding Planners",
    icon: Users,
    description: "Professional wedding planners and coordinators",
    link: "planners"
  }
];

const SubLocationPage = () => {
  const { location, subLocation } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);

  if (!mainLocation || !area) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <SEOHead
        title={`Wedding Services in ${area.name}, ${mainLocation.name} | Find Local Vendors`}
        description={`Discover wedding venues and services in ${area.name}, ${mainLocation.name}. Compare prices and book trusted vendors for your wedding celebration.`}
        keywords={`wedding services ${area.name}, wedding vendors ${area.name}, ${mainLocation.name} wedding services`}
        canonicalUrl={`https://yourwebsite.com/location/${location}/${subLocation}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            Wedding Services in {area.name}
          </h1>
          <p className="text-lg text-gray-600">
            Find and compare wedding vendors and services in {area.name}, {mainLocation.name}.
            Browse through different categories and book trusted professionals for your special day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.link}
              title={category.title}
              icon={category.icon}
              description={category.description}
              link={`/location/${location}/${subLocation}/${category.link}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default SubLocationPage;