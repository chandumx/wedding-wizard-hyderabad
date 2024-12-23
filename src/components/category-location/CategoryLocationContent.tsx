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
    if (location.includes('Shalibanda')) {
      return `Experience the finest wedding halls in Shalibanda, a historic area of Old City, Hyderabad. Our wedding venues in Shalibanda showcase a perfect blend of traditional architecture and modern facilities. Each hall is equipped with state-of-the-art amenities while maintaining the cultural essence of Old City. With spacious interiors, dedicated parking facilities, and professional staff, our Shalibanda venues are ideal for both intimate gatherings and grand wedding celebrations.`;
    }
    if (location.includes('Pathergatti')) {
      return `Welcome to our exclusive collection of wedding halls in Pathergatti, known for its rich cultural heritage in Old City, Hyderabad. Our Pathergatti venues offer elegant spaces with modern amenities while preserving the traditional charm. These halls feature contemporary facilities, professional event management, and customizable spaces to accommodate celebrations of all sizes. The strategic location in Pathergatti ensures easy accessibility and a memorable wedding experience.`;
    }
    if (location.includes('Moghalpura')) {
      return `Discover exceptional wedding venues in Moghalpura, a prestigious locality in Old City, Hyderabad. Our carefully selected wedding halls in Moghalpura combine luxury with tradition, offering sophisticated spaces for your special day. Each venue features modern amenities, professional services, and flexible arrangements to suit various wedding styles and sizes. The convenient location in Moghalpura provides excellent connectivity and ample parking facilities.`;
    }
    if (location.includes('Hussaini Alam')) {
      return `Explore our premium wedding halls in Hussaini Alam, a distinguished area of Old City, Hyderabad. Our venues in Hussaini Alam offer elegant settings with state-of-the-art facilities for your wedding celebration. From traditional nikah ceremonies to grand receptions, these halls provide versatile spaces with modern amenities while maintaining the cultural essence of the area. Each venue ensures excellent accessibility and professional service.`;
    }
    return content;
  };

  const getLocationSpecificFAQs = (location: string) => {
    const locationName = location.split(',')[0];
    return [
      {
        question: `What makes ${locationName} area special for wedding venues?`,
        answer: `The ${locationName} area offers a perfect blend of traditional charm and modern amenities. Wedding venues here provide excellent accessibility, spacious halls, and are known for their cultural significance in Old City Hyderabad.`
      },
      {
        question: `What types of wedding venues are available in ${locationName}?`,
        answer: `In ${locationName}, you'll find various wedding venues including traditional marriage halls, modern banquet facilities, and customizable event spaces that can accommodate both intimate ceremonies and grand wedding celebrations.`
      }
    ];
  };

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
        questions={getLocationSpecificFAQs(locationString)}
      />
    </>
  );
};