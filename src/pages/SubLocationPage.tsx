import { useParams } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { Building2, DollarSign, MapPin, Calendar, Star, Users, PartyPopper } from 'lucide-react';
import { Card } from '../components/ui/card';
import { locations } from "../data/locations";

const SubLocationPage = () => {
  const { location, subLocation } = useParams();
  
  const mainLocation = locations.find(loc => loc.slug === location);
  const area = mainLocation?.areas.find(area => area.slug === subLocation);

  if (!mainLocation || !area) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-center">Location not found</h1>
        </div>
      </>
    );
  }

  const pageTitle = `Wedding Halls in ${area.name}, ${mainLocation.name} | Book Top Wedding Venues`;
  const pageDescription = `Find the best wedding halls and venues in ${area.name}, ${mainLocation.name}. We offer premium wedding venues with modern amenities, customizable packages, and professional services for your perfect wedding celebration in ${area.name}.`;

  const benefits = [
    {
      icon: Building2,
      title: "Spacious Venues",
      text: `Our wedding halls in ${area.name} offer expansive spaces that can accommodate gatherings from 300 to 1500+ guests, perfect for grand wedding celebrations.`
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      text: "Transparent pricing with customizable packages to suit different budgets. Special rates available for weekday events."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      text: `Centrally located venues in ${area.name} with excellent connectivity, ample parking space, and proximity to major hotels and shopping areas.`
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      text: "Easy scheduling with multiple date options and professional event coordination support available year-round."
    },
    {
      icon: Users,
      title: "Full-Service Support",
      text: "Dedicated event managers and staff to handle everything from setup to cleanup, ensuring a seamless experience."
    },
    {
      icon: PartyPopper,
      title: "Modern Amenities",
      text: "State-of-the-art sound systems, climate control, backup power, and contemporary facilities for a comfortable experience."
    }
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `wedding halls in ${area.name}`,
          `marriage halls ${area.name}`,
          `wedding venues ${area.name}`,
          `${mainLocation.name} wedding halls`,
          `best wedding venues ${area.name}`,
          `wedding venues near ${area.name}`,
          `affordable wedding halls ${area.name}`,
          `luxury wedding venues ${area.name}`,
          `wedding banquet halls ${area.name}`
        ]}
        canonicalUrl={`https://getmarriedinhyderabad.in/location/${location}/${subLocation}`}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4 text-gray-900">
              Wedding Halls in {area.name}, {mainLocation.name}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the finest wedding halls and venues in {area.name}, {mainLocation.name}. Our venues combine traditional charm with modern amenities to create the perfect setting for your wedding celebration. From intimate gatherings to grand celebrations, we offer versatile spaces that can be customized to match your vision.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-display font-semibold mb-6 text-center text-gray-900">
                About Wedding Halls in {area.name}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Located in the heart of {area.name}, our wedding halls offer the perfect blend of convenience and elegance. Each venue is designed to provide a sophisticated setting for your special day while offering modern amenities and professional services. Our halls can accommodate both traditional ceremonies and contemporary celebrations.
                </p>
                <p className="leading-relaxed">
                  Whether you're planning an intimate wedding or a grand celebration, our venues in {area.name} can be tailored to create your dream wedding. We understand the importance of your special day and strive to provide exceptional service and attention to detail.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-display font-semibold text-center text-gray-900 mb-8">
                Why Choose Our Wedding Halls?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-display font-semibold text-center text-gray-900 mb-6">
                Book Your Perfect Wedding Venue
              </h2>
              <div className="space-y-4 text-gray-600 max-w-3xl mx-auto">
                <p className="leading-relaxed">
                  Planning a wedding in {area.name}? Let us help you create the celebration of your dreams. Our wedding halls offer the perfect combination of location, style, and service. With experienced event coordinators, modern facilities, and customizable packages, we ensure your wedding day is everything you've imagined.
                </p>
                <p className="leading-relaxed">
                  Contact us today to schedule a venue tour or discuss your requirements with our expert team. We're here to help you create the perfect wedding celebration in {area.name}, {mainLocation.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SubLocationPage;