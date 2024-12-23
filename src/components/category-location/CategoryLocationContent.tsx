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
  const faqQuestions = [
    {
      question: "What makes Charminar area special for wedding venues?",
      answer: "The Charminar area offers a unique blend of historical charm and cultural significance. Wedding venues here provide a traditional Hyderabadi atmosphere with the iconic Charminar as a backdrop, making your celebration truly memorable."
    },
    {
      question: "What types of wedding venues are available near Charminar?",
      answer: "Near Charminar, you'll find various wedding venues including traditional marriage halls, heritage properties, and modern banquet halls. These venues can accommodate both intimate nikah ceremonies and grand wedding receptions."
    }
  ];

  return (
    <>
      {!isCharminarWeddingHalls && (
        <CategoryContent 
          title=""
          description={description}
          content={content}
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
        title="Frequently Asked Questions About Wedding Venues Near Charminar"
        questions={faqQuestions}
      />
    </>
  );
};