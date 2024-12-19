import { Building2, Utensils, Camera, Palette } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { LocationCard } from "../components/LocationCard";

const categories = [
  {
    title: "Wedding Halls",
    icon: Building2,
    description: "Find the perfect venue for your special day",
    link: "/category/wedding-halls",
  },
  {
    title: "Catering",
    icon: Utensils,
    description: "Top-rated wedding caterers in Hyderabad",
    link: "/category/catering",
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Capture your precious moments",
    link: "/category/photography",
  },
  {
    title: "Decoration",
    icon: Palette,
    description: "Transform your venue beautifully",
    link: "/category/decoration",
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
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="Wedding Venues & Services in Hyderabad | Find Top Wedding Vendors"
        description="Discover the best wedding venues, caterers, photographers, and more in Hyderabad. Compare prices, read reviews, and book trusted vendors for your special day."
        keywords="wedding venues hyderabad, wedding halls hyderabad, wedding caterers hyderabad, wedding photographers hyderabad"
        canonicalUrl="https://yourwebsite.com"
      />
      
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Popular Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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