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
  const getLocationSpecificContent = (location: string, serviceTitle: string) => {
    // Old City Locations
    if (location.includes('Charminar')) {
      if (serviceTitle.toLowerCase().includes('banquet')) {
        return `Discover premium banquet halls near Charminar, Hyderabad's iconic landmark. Our carefully selected banquet venues in the Charminar area combine traditional architecture with modern amenities to create the perfect setting for your celebrations. From corporate events to social gatherings, our banquet halls offer versatile spaces that can be customized to your needs. Each venue features professional staff, excellent catering options, and state-of-the-art facilities while maintaining the cultural essence of Old City Hyderabad.`;
      }
      if (serviceTitle.toLowerCase().includes('lighting')) {
        return `Experience exceptional lighting and ambiance services near Charminar, Hyderabad's iconic landmark. Our professional lighting services in the Charminar area combine traditional elegance with modern technology to create stunning atmospheres for weddings and celebrations. We specialize in architectural lighting that complements the historic surroundings, offering LED setups, elegant chandeliers, and ambient lighting solutions. Our expert team provides comprehensive lighting design services, ensuring your venue near Charminar shines brilliantly for your special occasion.`;
      }
      if (serviceTitle.toLowerCase().includes('wedding hall')) {
        return `Discover our premium wedding halls near Charminar, a historic landmark in Old City, Hyderabad. Our carefully selected venues near Charminar offer state-of-the-art facilities, elegant decor, and professional services to make your wedding celebration truly memorable. Located in the heart of Old City, these wedding halls combine traditional charm with modern amenities, perfect for both intimate gatherings and grand celebrations. Each venue provides excellent accessibility, ample parking, and customizable spaces to create your dream wedding setting.`;
      }
    }
    if (location.includes('Khilwat')) {
      if (serviceTitle.toLowerCase().includes('banquet')) {
        return `Experience the finest banquet halls in Khilwat, Old City. Our banquet venues in Khilwat offer elegant spaces perfect for all types of celebrations and corporate events. Each hall features modern amenities while preserving the traditional charm of Old City. With professional event management, customizable packages, and excellent catering services, our Khilwat banquet halls ensure memorable events.`;
      }
      if (serviceTitle.toLowerCase().includes('lighting')) {
        return `Transform your venue with our premium lighting and ambiance services in Khilwat, Old City. Our expert lighting designers specialize in creating enchanting atmospheres that perfectly complement the historic charm of Khilwat's venues. We offer a comprehensive range of lighting solutions including traditional chandeliers, modern LED installations, architectural lighting, and customized ambient setups. Our services are tailored to enhance both indoor and outdoor spaces, ensuring your celebration in Khilwat is beautifully illuminated.`;
      }
      if (serviceTitle.toLowerCase().includes('wedding hall')) {
        return `Welcome to our selection of wedding halls in Khilwat, a historic neighborhood in Old City, Hyderabad. Our Khilwat venues perfectly blend traditional architecture with modern conveniences. Each wedding hall offers comprehensive facilities, professional management, and customizable spaces for celebrations of any size. The prime location in Khilwat provides easy access and a perfect setting for your special day.`;
      }
    }
    if (location.includes('Chatrinaka')) {
      if (serviceTitle.toLowerCase().includes('banquet')) {
        return `Explore our premium banquet halls in Chatrinaka, Old City. Our venues offer sophisticated spaces perfect for corporate events, social gatherings, and celebrations. Each banquet hall features modern amenities, professional service, and customizable arrangements to suit various event types and sizes. Located in the heart of Chatrinaka, these venues provide excellent accessibility and a perfect blend of traditional charm and contemporary facilities.`;
      }
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

  const getLocationSpecificFAQs = (location: string, serviceTitle: string) => {
    const locationName = location.split(',')[0];
    
    if (locationName === 'Charminar Area') {
      if (serviceTitle.toLowerCase().includes('banquet')) {
        return [
          {
            question: "What types of events can be hosted at banquet halls near Charminar?",
            answer: "Our banquet halls near Charminar are versatile spaces suitable for various events including corporate meetings, social gatherings, conferences, and celebrations. Each venue offers customizable arrangements and professional services to suit your specific event needs."
          },
          {
            question: "What amenities are available in banquet halls near Charminar?",
            answer: "Our banquet halls near Charminar feature modern amenities including air conditioning, professional sound systems, high-speed internet, dedicated parking, catering services, and experienced event staff to ensure your event runs smoothly."
          }
        ];
      }
      if (serviceTitle.toLowerCase().includes('lighting')) {
        return [
          {
            question: "What types of lighting services do you offer in the Charminar area?",
            answer: "We offer a comprehensive range of lighting services near Charminar, including traditional chandelier installations, modern LED lighting systems, architectural lighting for heritage venues, ambient mood lighting, and specialized wedding ceremony lighting setups."
          },
          {
            question: "How do you adapt lighting designs for venues near Charminar?",
            answer: "Our lighting designs in the Charminar area are carefully crafted to complement the historic architecture while meeting modern event requirements. We consider the venue's unique characteristics, your specific needs, and blend traditional and contemporary lighting elements."
          }
        ];
      }
    }
    
    if (locationName === 'Khilwat' && title.toLowerCase().includes('lighting')) {
      return [
        {
          question: "What types of lighting services do you offer in Khilwat?",
          answer: "We offer a comprehensive range of lighting services in Khilwat including traditional chandelier installations, modern LED lighting systems, architectural lighting for heritage venues, ambient mood lighting, and specialized wedding ceremony lighting setups tailored to complement Old City's unique architecture."
        },
        {
          question: "How do you adapt lighting designs for venues in Khilwat?",
          answer: "Our lighting designs in Khilwat are carefully crafted to enhance the historic architecture while meeting modern event requirements. We consider the venue's unique characteristics, your specific preferences, and blend traditional and contemporary lighting elements to create the perfect ambiance."
        }
      ];
    }
    
    if (locationName === 'Charminar Area' && title.toLowerCase().includes('lighting')) {
      return [
        {
          question: "What types of lighting services do you offer in the Charminar area?",
          answer: "We offer a comprehensive range of lighting services near Charminar, including traditional chandelier installations, modern LED lighting systems, architectural lighting for heritage venues, ambient mood lighting, and specialized wedding ceremony lighting setups."
        },
        {
          question: "How do you adapt lighting designs for venues near Charminar?",
          answer: "Our lighting designs in the Charminar area are carefully crafted to complement the historic architecture while meeting modern event requirements. We consider the venue's unique characteristics, your specific needs, and blend traditional and contemporary lighting elements."
        }
      ];
    }
    
    return [
      {
        question: `What makes ${locationName} area special for ${serviceTitle.toLowerCase()}?`,
        answer: `The ${locationName} area offers excellent ${serviceTitle.toLowerCase()} services with experienced professionals who understand local venue requirements and client preferences.`
      },
      {
        question: `What types of ${serviceTitle.toLowerCase()} services are available in ${locationName}?`,
        answer: `In ${locationName}, you'll find various ${serviceTitle.toLowerCase()} options including modern setups, traditional arrangements, and customizable solutions to match your celebration needs.`
      }
    ];
  };

  return (
    <>
      {!isCharminarWeddingHalls && (
        <CategoryContent 
          title=""
          description={description}
          content={getLocationSpecificContent(locationString, title)}
        />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-display font-semibold mb-6">
          Available {title} Services in {locationString}
        </h2>
        <PlacesList 
          query={`${title} in ${locationString}`}
          location={areaLocation}
        />
      </div>

      <FAQSection 
        title={`Frequently Asked Questions About ${title} in ${locationString}`}
        questions={getLocationSpecificFAQs(locationString, title)}
      />
    </>
  );
};
