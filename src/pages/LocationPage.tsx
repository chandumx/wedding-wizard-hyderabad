import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";

const locationContent = {
  "jubilee-hills": {
    title: "Wedding Halls in Jubilee Hills, Hyderabad",
    description: "Discover premium wedding venues and banquet halls in Jubilee Hills, Hyderabad. Compare prices, check availability, and book the perfect venue for your wedding celebration.",
    content: `
      Looking for the perfect wedding venue in Jubilee Hills? This upscale neighborhood in Hyderabad 
      offers some of the city's most prestigious and elegant wedding halls. From intimate gathering 
      spaces to grand banquet halls, Jubilee Hills provides venues for every wedding size and style.

      Our curated list includes air-conditioned marriage halls, outdoor venues with beautiful gardens, 
      and modern banquet facilities equipped with the latest amenities. Many venues offer comprehensive 
      wedding packages including catering, decoration, and event planning services.

      Popular wedding halls in Jubilee Hills feature:
      - Spacious parking facilities
      - Professional event management teams
      - State-of-the-art sound systems
      - Customizable wedding packages
      - Premium catering services
      - Elegant decor options
    `,
    keywords: [
      "wedding halls jubilee hills",
      "marriage halls jubilee hills",
      "banquet halls jubilee hills",
      "wedding venues jubilee hills hyderabad"
    ],
  },
  // Add more locations as needed
};

const LocationPage = () => {
  const { location } = useParams();
  const content = locationContent[location as keyof typeof locationContent];

  if (!content) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <SEOHead
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonicalUrl={`https://yourwebsite.com/location/${location}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-6">{content.title}</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">{content.description}</p>
          <div className="whitespace-pre-line">{content.content}</div>
        </div>
      </main>
    </>
  );
};

export default LocationPage;
