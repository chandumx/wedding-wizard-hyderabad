import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { 
  Building2,
  Hotel,
  Trees,
  Building,
  Warehouse,
  UtensilsCrossed,
  Soup,
  Cake,
  Coffee,
  Sparkles,
  Flower2,
  Lightbulb,
  Palette,
  LayoutTemplate,
  Camera,
  Video,
  Plane,
  Music2,
  PartyPopper,
  Drum,
  Sparkle, // Replacing Firework with Sparkle
  Users,
  PartyPopper as EventIcon,
  Briefcase,
  Map,
  Shirt,
  Shirt as GownIcon,
  Gem,
  Scissors,
  Paintbrush,
  Flower,
  Scissors as SalonIcon,
  Heart, // Replacing Spa with Heart
  Mail,
  Gift,
  GiftIcon,
  Package,
  Car,
  Bus,
  Building as AccommodationIcon,
  Hotel as HotelIcon,
  Home,
  Church, // Replacing HandsPraying with Church
  Calculator,
  ShoppingCart,
  Baby
} from "lucide-react";
import { ConventionCenterContent } from "../components/categories/ConventionCenterContent";

const SubLocationPage = () => {
  const { location, subLocation } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);

  if (!mainLocation || !area) {
    return <div>Location not found</div>;
  }

  const title = `Best Convention Centers in ${area.name}, ${mainLocation.name} | Book Top Wedding Services`;
  const description = `Find and compare the best large convention centers for grand events in ${area.name}, ${mainLocation.name}. Get quotes, check availability, and book trusted vendors for your wedding celebration.`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={[
          `convention centers ${area.name}`,
          `wedding halls ${area.name}`,
          `${mainLocation.name} convention centers`,
          `wedding venues ${area.name}`,
          `large wedding halls ${area.name}`,
          `marriage halls ${mainLocation.name}`,
          `event spaces ${area.name}`,
          `wedding venues old city hyderabad`
        ]}
        canonicalUrl={`https://yourwebsite.com/location/${location}/${subLocation}/convention-centers`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <ConventionCenterContent 
          title={title}
          description={description}
        />
      </main>
    </>
  );
};

export default SubLocationPage;
