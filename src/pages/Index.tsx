import { Building2, Utensils, Camera, Palette, Users, Music, Gift, Ring } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { LocationCard } from "../components/LocationCard";

const categories = [
  {
    title: "Wedding Venues",
    icon: Building2,
    description: "Find the perfect venue for your special day",
    link: "/category/wedding-halls",
  },
  {
    title: "Catering",
    icon: Utensils,
    description: "Authentic Hyderabadi cuisine for your guests",
    link: "/category/catering",
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Capture your precious moments forever",
    link: "/category/photography",
  },
  {
    title: "Decoration",
    icon: Palette,
    description: "Transform your venue beautifully",
    link: "/category/decoration",
  },
  {
    title: "Mehendi Artists",
    icon: Ring,
    description: "Traditional & modern mehendi designs",
    link: "/category/mehendi",
  },
  {
    title: "Entertainment",
    icon: Music,
    description: "Live music, DJs & wedding entertainment",
    link: "/category/entertainment",
  },
  {
    title: "Wedding Gifts",
    icon: Gift,
    description: "Unique gift ideas for the couple",
    link: "/category/gifts",
  },
  {
    title: "Event Planning",
    icon: Users,
    description: "Professional wedding planners & coordinators",
    link: "/category/planning",
  },
];

const locations = [
  {
    name: "Jubilee Hills",
    image: "/placeholder.svg",
    vendorCount: 150,
    link: "/location/jubilee-hills",
  },
  {
    name: "Banjara Hills",
    image: "/placeholder.svg",
    vendorCount: 120,
    link: "/location/banjara-hills",
  },
  {
    name: "Hitech City",
    image: "/placeholder.svg",
    vendorCount: 80,
    link: "/location/hitech-city",
  },
  {
    name: "Old City",
    image: "/placeholder.svg",
    vendorCount: 95,
    link: "/location/old-city",
  },
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="Wedding Venues & Services in Hyderabad | Find Top Wedding Vendors"
        description="Plan your dream wedding in Hyderabad with our curated selection of venues, caterers, photographers, and more. Compare prices, read reviews, and book trusted vendors."
        keywords={[
          "wedding venues hyderabad",
          "wedding halls hyderabad",
          "wedding caterers hyderabad",
          "wedding photographers hyderabad",
          "wedding services hyderabad",
          "marriage halls hyderabad",
          "wedding planners hyderabad"
        ]}
        canonicalUrl="https://yourwebsite.com"
      />
      
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-4 text-center">
            Wedding Services in Hyderabad
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From traditional ceremonies to modern celebrations, find everything you need
            to make your wedding day perfect
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-4 text-center">
            Popular Wedding Locations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover the most sought-after wedding venues across Hyderabad
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;