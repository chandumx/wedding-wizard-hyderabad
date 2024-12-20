import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { locations } from "../data/locations";

const categoryDescriptions = {
  // Venues
  "banquet-halls": {
    title: "Banquet Halls",
    description: "Elegant banquet halls for your celebrations",
    content: `Discover premium banquet halls perfect for your wedding celebrations. Our curated venues 
    offer elegant spaces with modern amenities and professional services.`,
  },
  "open-venues": {
    title: "Open Lawns & Gardens",
    description: "Beautiful outdoor venues for ceremonies",
    content: `Host your wedding in beautiful outdoor settings. Our collection of open lawns and gardens 
    provides the perfect backdrop for memorable celebrations.`,
  },
  "hotels-resorts": {
    title: "Hotels & Resorts",
    description: "Luxury hotels and resorts for weddings",
    content: `Choose from premium hotels and resorts that offer complete wedding packages with 
    accommodation, catering, and event management services.`,
  },
  "farmhouses": {
    title: "Farmhouses",
    description: "Spacious farmhouses for private celebrations",
    content: `Book spacious farmhouses for private wedding celebrations. Perfect for both intimate 
    gatherings and grand celebrations with ample parking and amenities.`,
  },
  "convention-centers": {
    title: "Convention Centers",
    description: "Large convention centers for grand events",
    content: `Plan your grand wedding at our spacious convention centers. Ideal for large gatherings 
    with state-of-the-art facilities and professional management.`,
  },

  // Catering
  "traditional-cuisine": {
    title: "Traditional Indian Cuisine",
    description: "Authentic Indian wedding cuisine",
    content: `Experience authentic Indian wedding cuisine prepared by expert chefs. Choose from a 
    variety of regional specialties and traditional favorites.`,
  },
  "multi-cuisine": {
    title: "Multi-Cuisine Catering",
    description: "Diverse menu options for all tastes",
    content: `Offer your guests a diverse culinary experience with our multi-cuisine catering services. 
    From Indian to International cuisines, we have it all.`,
  },
  "sweets-desserts": {
    title: "Sweets & Desserts",
    description: "Wedding sweets and dessert specialists",
    content: `Add sweetness to your celebrations with our premium dessert services. Choose from 
    traditional Indian sweets to modern desserts and custom cakes.`,
  },
  "live-counters": {
    title: "Live Food Counters",
    description: "Interactive food stations and counters",
    content: `Enhance your wedding menu with interactive live counters. From chaat to international 
    cuisines, create memorable dining experiences.`,
  },

  // Decoration
  "floral-decor": {
    title: "Floral Decor",
    description: "Elegant floral arrangements and designs",
    content: `Transform your venue with stunning floral decorations. Our florists create beautiful 
    arrangements using fresh flowers and innovative designs.`,
  },
  "lighting": {
    title: "Lighting & Ambience",
    description: "Professional lighting and ambiance setup",
    content: `Create the perfect ambiance with professional lighting solutions. From LED walls to 
    mood lighting, we offer complete lighting packages.`,
  },
  "theme-decor": {
    title: "Theme-Based Decor",
    description: "Customized themed decorations",
    content: `Make your wedding unique with custom theme-based decorations. Our designers create 
    immersive experiences based on your chosen theme.`,
  },
  "stage-design": {
    title: "Stage & Mandap Design",
    description: "Beautiful stage and mandap setups",
    content: `Choose from elegant stage and mandap designs for your wedding ceremonies. We offer 
    both traditional and contemporary designs.`,
  },

  // Photography
  "traditional-photography": {
    title: "Traditional Photography",
    description: "Classic wedding photography services",
    content: `Capture your wedding moments with traditional photography. Our photographers specialize 
    in formal portraits and ceremony coverage.`,
  },
  "candid-photography": {
    title: "Candid Photography",
    description: "Natural and candid moment capture",
    content: `Document genuine moments with our candid photography services. Our photographers 
    capture the real emotions and spontaneous moments.`,
  },
  "wedding-films": {
    title: "Wedding Films",
    description: "Cinematic wedding video production",
    content: `Create cinematic wedding films that tell your story. Our videographers use 
    professional equipment and creative techniques.`,
  },
  "drone-coverage": {
    title: "Drone Coverage",
    description: "Aerial photography and videography",
    content: `Add a unique perspective to your wedding coverage with drone photography and 
    videography services.`,
  },

  entertainment: {
    title: "Wedding Entertainment",
    description: "Music and entertainment services for weddings",
    content: `Book top-rated wedding entertainment services including DJs, live bands, and performers. 
    Create the perfect atmosphere for your wedding celebration.`,
  },
  transportation: {
    title: "Wedding Transportation",
    description: "Luxury vehicles and transport services",
    content: `Choose from a fleet of luxury vehicles for your wedding day. 
    From classic cars to modern luxury vehicles, find the perfect transportation solution.`,
  },
  decoration: {
    title: "Wedding Decoration",
    description: "Professional wedding decoration services",
    content: `Transform your venue with professional wedding decoration services. 
    From traditional to modern themes, create the perfect ambiance for your special day.`,
  },
  hotels: {
    title: "Wedding Hotels",
    description: "Accommodation for wedding guests",
    content: `Find the best hotels near your wedding venue for your guests. 
    Compare rates, amenities, and book group reservations for your wedding party.`,
  },
  planners: {
    title: "Wedding Planners",
    description: "Professional wedding planning services",
    content: `Connect with experienced wedding planners who can help organize your perfect day. 
    From full-service planning to day-of coordination, find the right support for your needs.`,
  },

  "rental-services": {
    title: "Rental Services",
    description: "Professional rental services for weddings",
    content: `Find reliable rental services for your wedding needs including furniture, 
    crockery, tableware, and other equipment. Our verified vendors provide high-quality 
    rental items with professional delivery and setup services.
    
    Common rental items include:
    - Tables, chairs, and furniture
    - Tableware and crockery
    - Tents and temporary structures
    - Audio-visual equipment
    - Decorative items and props`,
  },
};

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-6">
            {categoryInfo.title} in {area.name}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-display font-semibold mb-4">
                About {categoryInfo.title} in {area.name}
              </h2>
              <p className="text-gray-600">
                {categoryInfo.content}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-display font-semibold">
                Why Choose {categoryInfo.title} in {area.name}?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Carefully vetted and trusted vendors</li>
                <li>Competitive prices and special packages</li>
                <li>Local expertise and knowledge</li>
                <li>Easy booking and scheduling</li>
                <li>Verified customer reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryLocationPage;
