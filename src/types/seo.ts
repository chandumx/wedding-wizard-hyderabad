export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  url: string;
  telephone: string;
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
}