import React from 'react';
import { Building2, DollarSign, MapPin, Calendar, Star, Users, PartyPopper } from 'lucide-react';
import { Card } from '../ui/card';

interface ConventionCenterContentProps {
  title: string;
  description: string;
}

export const ConventionCenterContent = ({ title, description }: ConventionCenterContentProps) => {
  const benefits = [
    {
      icon: Building2,
      title: "Spacious Venues",
      text: "Our convention centers offer expansive spaces that can accommodate large gatherings of 500 to 2000+ guests, perfect for grand wedding celebrations."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      text: "Transparent pricing with customizable packages to suit different budgets. Special rates for off-season bookings."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      text: "Easily accessible venues in Vattepally with ample parking space and proximity to major transportation hubs."
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      text: "Easy scheduling with multiple date options and professional event coordination support."
    },
    {
      icon: Users,
      title: "Full-Service Support",
      text: "Dedicated event managers and staff to handle everything from setup to cleanup."
    },
    {
      icon: PartyPopper,
      title: "Modern Amenities",
      text: "State-of-the-art sound systems, climate control, backup power, and modern facilities."
    }
  ];

  const features = [
    "Professional event planning assistance",
    "Customizable stage and mandap setups",
    "Modern audio-visual equipment",
    "Dedicated parking facilities",
    "Multiple dining areas",
    "Separate preparation rooms",
    "Advanced security systems",
    "Backup power supply",
    "Climate-controlled environments",
    "Wheelchair accessibility"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold mb-4 text-gray-900">
          {title}
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-display font-semibold mb-6 text-center text-gray-900">
            About Our Convention Centers
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              In the heart of Old City, Vattepally's convention centers blend traditional charm with modern amenities. Our venues are designed to accommodate grand celebrations while maintaining the cultural essence of Hyderabad. Each center is equipped with state-of-the-art facilities and supported by experienced staff to ensure your event runs smoothly.
            </p>
            <p className="leading-relaxed">
              Whether you're planning an intimate gathering or a grand celebration, our convention centers offer flexible spaces that can be customized to your needs. From traditional wedding ceremonies to modern reception parties, we provide the perfect setting for every occasion.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-display font-semibold text-center text-gray-900 mb-8">
            Why Choose Our Convention Centers?
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

        <div className="bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-display font-semibold text-center text-gray-900 mb-8">
            Features & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-display font-semibold text-center text-gray-900 mb-6">
            Book Your Perfect Venue
          </h2>
          <div className="space-y-4 text-gray-600 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              Planning a wedding celebration in Vattepally? Our convention centers offer the perfect blend of space, style, and service. With experienced event coordinators, state-of-the-art facilities, and customizable packages, we ensure your special day is memorable and stress-free.
            </p>
            <p className="leading-relaxed">
              Contact us today to schedule a venue tour or discuss your requirements with our expert team. We're here to help you create the wedding celebration of your dreams in one of Vattepally's finest convention centers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};