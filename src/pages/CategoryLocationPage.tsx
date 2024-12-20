import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { locations } from "../data/locations";

const categoryDescriptions = {
  venues: {
    title: "Wedding Venues",
    description: "Find the perfect wedding venue for your special day",
    content: `Our curated selection of wedding venues offers spaces for every style and budget. 
    Each venue is carefully vetted to ensure quality service and memorable experiences. 
    Compare prices, check availability, and book your perfect wedding venue.`,
  },
  photography: {
    title: "Wedding Photography",
    description: "Professional wedding photographers to capture your moments",
    content: `Discover talented photographers who specialize in wedding photography. 
    Browse through portfolios, compare packages, and find the perfect photographer to capture your special day.`,
  },
  catering: {
    title: "Wedding Catering",
    description: "Expert catering services for your wedding",
    content: `Choose from a wide selection of wedding caterers offering diverse cuisine options. 
    From traditional delicacies to modern fusion dishes, find the perfect menu for your wedding.`,
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
};

const CategoryLocationPage = () => {
  const { location, subLocation, category } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);
  const categoryInfo = categoryDescriptions[category as keyof typeof categoryDescriptions];

  if (!mainLocation || !area || !categoryInfo) {
    return <div>Page not found</div>;
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