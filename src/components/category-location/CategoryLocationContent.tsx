import React from 'react';
import { CategoryContent } from '../categories/CategoryContent';
import { PlacesList } from '../PlacesList';
import { FAQSection } from '../FAQSection';

interface CategoryLocationContentProps {
  title: string;
  description: string;
  content: string;
  locationString: string;
  areaLocation: { lat: number; lng: number };
  isCharminarWeddingHalls?: boolean;
}

export const CategoryLocationContent = ({
  title,
  description,
  content,
  locationString,
  areaLocation,
  isCharminarWeddingHalls
}: CategoryLocationContentProps) => {
  const getLocationSpecificContent = (location: string) => {
    if (location.includes('Chatrinaka')) {
      return `Discover our premium wedding halls in Chatrinaka, a vibrant neighborhood in Old City, Hyderabad. Our carefully selected venues in Chatrinaka offer state-of-the-art facilities, elegant decor, and professional services to make your wedding celebration truly memorable. Located in the heart of Old City, Chatrinaka's wedding halls combine traditional charm with modern amenities, perfect for both intimate gatherings and grand celebrations. Each venue in Chatrinaka provides excellent accessibility, ample parking, and customizable spaces to create your dream wedding setting.`;
    }
    return content;
  };

  const faqQuestions = [
    {
      question: "What makes Chatrinaka area special for wedding venues?",
      answer: "The Chatrinaka area offers a perfect blend of traditional charm and modern amenities. Wedding venues here provide excellent accessibility, spacious halls, and are known for their cultural significance in Old City Hyderabad."
    },
    {
      question: "What types of wedding venues are available in Chatrinaka?",
      answer: "In Chatrinaka, you'll find various wedding venues including traditional marriage halls, modern banquet facilities, and customizable event spaces that can accommodate both intimate ceremonies and grand wedding celebrations."
    }
  ];

  return (
    <>
      {!isCharminarWeddingHalls && (
        <CategoryContent 
          title=""
          description={description}
          content={getLocationSpecificContent(locationString)}
        />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-display font-semibold mb-6">
          Available Venues in {locationString}
        </h2>
        <PlacesList 
          query={`${title} in ${locationString}`}
          location={areaLocation}
        />
      </div>

      <FAQSection 
        title={`Frequently Asked Questions About Wedding Venues in ${locationString}`}
        questions={faqQuestions}
      />
    </>
  );
};