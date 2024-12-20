import { toast } from "sonner";

const UNSPLASH_ACCESS_KEY = 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M';
const PEXELS_API_KEY = 'LHnYgHDxPvPMktxIKCwBcgXTEelbTyEPMH8a3D2LxdRo8aDqhIEEMUh9';
const PIXABAY_API_KEY = '21764229-f2bda4677445f1ed3fee62bb4';
const GOOGLE_API_KEY = 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI';
const GOOGLE_SEARCH_ENGINE_ID = '99f2770f414134e60';

interface ImageResult {
  url: string;
  alt?: string;
}

// Simple in-memory cache
const cache: { [key: string]: { images: ImageResult[]; timestamp: number } } = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

// Expanded category-specific fallback images
const fallbackImages: { [key: string]: string } = {
  'venue': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'decor': 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'catering': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  'entertainment': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'photography': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'gifts': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  'films': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  'lighting': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'garden': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'default': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
};

const getFallbackImage = (query: string): string => {
  const categoryMatches = {
    venue: ['hall', 'garden', 'hotel', 'resort', 'farmhouse', 'convention', 'lawn', 'banquet'],
    decor: ['decor', 'flower', 'stage', 'mandap', 'theme'],
    catering: ['food', 'cuisine', 'catering', 'sweet', 'dessert'],
    entertainment: ['dj', 'dance', 'music', 'band', 'performer', 'live'],
    photography: ['photo', 'camera'],
    films: ['film', 'video', 'cinema', 'wedding film'],
    gifts: ['gift', 'return gift', 'present'],
    lighting: ['light', 'ambience', 'ambient'],
    garden: ['lawn', 'garden', 'outdoor']
  };

  const category = Object.entries(categoryMatches).find(([_, keywords]) =>
    keywords.some(keyword => query.toLowerCase().includes(keyword))
  )?.[0];

  return fallbackImages[category || 'default'];
};

const searchUnsplash = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map((img: any) => ({
      url: img.urls.regular,
      alt: img.alt_description
    }));
  } catch (error) {
    console.log('Unsplash API error:', error);
    return [];
  }
};

const searchPexels = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos.map((photo: any) => ({
        url: photo.src.large,
        alt: photo.alt
      }));
    }
    return [];
  } catch (error) {
    console.log('Pexels API error:', error);
    return [];
  }
};

const searchPixabay = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&per_page=1`
    );

    if (!response.ok) {
      throw new Error(`Pixabay API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.hits && data.hits.length > 0) {
      return data.hits.map((img: any) => ({
        url: img.webformatURL,
        alt: img.tags
      }));
    }
    return [];
  } catch (error) {
    console.log('Pixabay API error:', error);
    return [];
  }
};

const searchGoogleImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://customsearch.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=1`
    );

    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items.map((item: any) => ({
        url: item.link,
        alt: item.title
      }));
    }
    return [];
  } catch (error) {
    console.log('Google Search API error:', error);
    return [];
  }
};

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const cacheKey = query.toLowerCase();
    const now = Date.now();
    const cachedData = cache[cacheKey];
    
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached image results');
      return cachedData.images;
    }

    let results: ImageResult[] = [];
    
    // Try each API in sequence with proper error handling
    try {
      results = await searchUnsplash(query);
      console.log('Unsplash results:', results.length);
    } catch (error) {
      console.log('Unsplash failed, trying Pexels');
    }

    if (results.length === 0) {
      try {
        results = await searchPexels(query);
        console.log('Pexels results:', results.length);
      } catch (error) {
        console.log('Pexels failed, trying Pixabay');
      }
    }

    if (results.length === 0) {
      try {
        results = await searchPixabay(query);
        console.log('Pixabay results:', results.length);
      } catch (error) {
        console.log('Pixabay failed, trying Google Images');
      }
    }

    if (results.length === 0) {
      try {
        results = await searchGoogleImages(query);
        console.log('Google Images results:', results.length);
      } catch (error) {
        console.log('Google Images failed, using fallback image');
      }
    }

    if (results.length > 0) {
      cache[cacheKey] = {
        images: results,
        timestamp: now
      };
      return results;
    }

    // If all APIs fail, return a fallback image
    const fallbackUrl = getFallbackImage(query);
    return [{ url: fallbackUrl, alt: query }];
  } catch (error) {
    console.error('Error fetching images:', error);
    const fallbackUrl = getFallbackImage(query);
    return [{ url: fallbackUrl, alt: query }];
  }
};

export const getRandomImage = async (query: string): Promise<string> => {
  try {
    const images = await searchImages(query);
    return images[0]?.url || getFallbackImage(query);
  } catch (error) {
    console.error('Error getting random image:', error);
    return getFallbackImage(query);
  }
};
