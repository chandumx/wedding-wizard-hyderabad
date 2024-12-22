import React from 'react';
import { CheckCircle, DollarSign, MapPin, Calendar, Star } from 'lucide-react';

interface CategoryContentProps {
  title: string;
  description: string;
  content: string;
}

export const CategoryContent = ({ title, description, content }: CategoryContentProps) => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Premium quality services"
    },
    {
      icon: DollarSign,
      text: "Competitive prices and special packages"
    },
    {
      icon: MapPin,
      text: "Convenient locations"
    },
    {
      icon: Calendar,
      text: "Easy booking and scheduling"
    },
    {
      icon: Star,
      text: "Verified customer reviews"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-6">
        {title}
      </h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          {description}
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-display font-semibold mb-4">
            About {title}
          </h2>
          <p className="text-gray-600">
            {content}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-display font-semibold">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-6 bg-secondary rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 card-hover border border-gray-200"
              >
                <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
            <div 
              className="flex items-start gap-3 p-6 bg-secondary rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 card-hover md:col-span-2 mx-auto max-w-md border border-gray-200"
            >
              <Star className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-gray-700">Verified customer reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};