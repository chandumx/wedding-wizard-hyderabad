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
  Firework,
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
  Spa,
  Mail,
  Gift,
  GiftIcon,
  Package,
  Car,
  Bus,
  Building as AccommodationIcon,
  Hotel as HotelIcon,
  Home,
  HandsPraying,
  Calculator,
  ShoppingCart,
  Baby
} from "lucide-react";
import { locations } from "../data/locations";

const categories = [
  // Venues
  {
    title: "Banquet Halls",
    icon: Building2,
    description: "Elegant banquet halls for your celebrations",
    link: "banquet-halls"
  },
  {
    title: "Open Lawns & Gardens",
    icon: Trees,
    description: "Beautiful outdoor venues for ceremonies",
    link: "open-venues"
  },
  {
    title: "Hotels & Resorts",
    icon: Hotel,
    description: "Luxury hotels and resorts for weddings",
    link: "hotels-resorts"
  },
  {
    title: "Farmhouses",
    icon: Building,
    description: "Spacious farmhouses for private celebrations",
    link: "farmhouses"
  },
  {
    title: "Convention Centers",
    icon: Warehouse,
    description: "Large convention centers for grand events",
    link: "convention-centers"
  },
  
  // Catering
  {
    title: "Traditional Indian Cuisine",
    icon: UtensilsCrossed,
    description: "Authentic Indian wedding cuisine",
    link: "traditional-cuisine"
  },
  {
    title: "Multi-Cuisine Catering",
    icon: Soup,
    description: "Diverse menu options for all tastes",
    link: "multi-cuisine"
  },
  {
    title: "Sweets & Desserts",
    icon: Cake,
    description: "Wedding sweets and dessert specialists",
    link: "sweets-desserts"
  },
  {
    title: "Live Food Counters",
    icon: Coffee,
    description: "Interactive food stations and counters",
    link: "live-counters"
  },
  
  // Decoration
  {
    title: "Floral Decor",
    icon: Flower2,
    description: "Elegant floral arrangements and designs",
    link: "floral-decor"
  },
  {
    title: "Lighting & Ambience",
    icon: Lightbulb,
    description: "Professional lighting and ambiance setup",
    link: "lighting"
  },
  {
    title: "Theme-Based Decor",
    icon: Palette,
    description: "Customized themed decorations",
    link: "theme-decor"
  },
  {
    title: "Stage & Mandap Design",
    icon: LayoutTemplate,
    description: "Beautiful stage and mandap setups",
    link: "stage-design"
  },
  
  // Photography
  {
    title: "Traditional Photography",
    icon: Camera,
    description: "Classic wedding photography services",
    link: "traditional-photography"
  },
  {
    title: "Candid Photography",
    icon: Camera,
    description: "Natural and candid moment capture",
    link: "candid-photography"
  },
  {
    title: "Wedding Films",
    icon: Video,
    description: "Cinematic wedding video production",
    link: "wedding-films"
  },
  {
    title: "Drone Coverage",
    icon: Plane,
    description: "Aerial photography and videography",
    link: "drone-coverage"
  },
  
  // Entertainment
  {
    title: "DJs & Live Bands",
    icon: Music2,
    description: "Professional music entertainment",
    link: "music"
  },
  {
    title: "Dance Performers",
    icon: PartyPopper,
    description: "Professional dance performances",
    link: "dancers"
  },
  {
    title: "Cultural Performances",
    icon: Drum,
    description: "Traditional cultural shows",
    link: "cultural-shows"
  },
  {
    title: "Fireworks",
    icon: Firework,
    description: "Professional fireworks displays",
    link: "fireworks"
  },
  
  // Event Planners
  {
    title: "Wedding Planners",
    icon: Users,
    description: "Professional wedding planning services",
    link: "wedding-planners"
  },
  {
    title: "Party Planners",
    icon: EventIcon,
    description: "Specialized party planning services",
    link: "party-planners"
  },
  {
    title: "Corporate Event Planners",
    icon: Briefcase,
    description: "Corporate event management",
    link: "corporate-planners"
  },
  {
    title: "Destination Wedding Planners",
    icon: Map,
    description: "Destination wedding specialists",
    link: "destination-planners"
  },
  
  // Clothing & Accessories
  {
    title: "Bridal Wear",
    icon: Shirt,
    description: "Designer bridal collections",
    link: "bridal-wear"
  },
  {
    title: "Groom Wear",
    icon: GownIcon,
    description: "Groom fashion and accessories",
    link: "groom-wear"
  },
  {
    title: "Jewelry",
    icon: Gem,
    description: "Wedding jewelry collections",
    link: "jewelry"
  },
  {
    title: "Designer Boutiques",
    icon: Scissors,
    description: "Custom designer wear",
    link: "boutiques"
  },
  
  // Beauty & Grooming
  {
    title: "Makeup Artists",
    icon: Paintbrush,
    description: "Professional bridal makeup",
    link: "makeup"
  },
  {
    title: "Mehendi Artists",
    icon: Flower,
    description: "Traditional mehendi services",
    link: "mehendi"
  },
  {
    title: "Hairstylists",
    icon: SalonIcon,
    description: "Professional hair styling",
    link: "hairstylists"
  },
  {
    title: "Spa & Pre-Wedding Packages",
    icon: Spa,
    description: "Relaxing spa treatments",
    link: "spa"
  },
  
  // Invitations & Gifts
  {
    title: "Digital Invitations",
    icon: Mail,
    description: "Modern digital invitation designs",
    link: "digital-invites"
  },
  {
    title: "Printed Invitations",
    icon: Mail,
    description: "Traditional printed cards",
    link: "printed-invites"
  },
  {
    title: "Personalized Gifts",
    icon: Gift,
    description: "Custom gift solutions",
    link: "personalized-gifts"
  },
  {
    title: "Return Gift Solutions",
    icon: Package,
    description: "Wedding return gift options",
    link: "return-gifts"
  },
  
  // Transport
  {
    title: "Luxury Cars",
    icon: Car,
    description: "Premium car rentals",
    link: "luxury-cars"
  },
  {
    title: "Wedding Car Rentals",
    icon: Car,
    description: "Decorated wedding vehicles",
    link: "wedding-cars"
  },
  {
    title: "Bus Rentals for Guests",
    icon: Bus,
    description: "Guest transportation solutions",
    link: "bus-rentals"
  },
  
  // Accommodation
  {
    title: "Guest Houses",
    icon: AccommodationIcon,
    description: "Comfortable guest accommodations",
    link: "guest-houses"
  },
  {
    title: "Hotel Bookings",
    icon: HotelIcon,
    description: "Hotel arrangements for guests",
    link: "hotel-bookings"
  },
  {
    title: "Short-Stay Rentals",
    icon: Home,
    description: "Temporary stay options",
    link: "short-stay"
  },
  
  // Others
  {
    title: "Pandits & Religious Services",
    icon: HandsPraying,
    description: "Traditional ceremony services",
    link: "religious-services"
  },
  {
    title: "Budget Planning Services",
    icon: Calculator,
    description: "Wedding budget management",
    link: "budget-planning"
  },
  {
    title: "Rental Services",
    icon: ShoppingCart,
    description: "Furniture and equipment rentals",
    link: "rental-services"
  },
  {
    title: "Kids Entertainment",
    icon: Baby,
    description: "Children's entertainment solutions",
    link: "kids-entertainment"
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
