import { toast } from "sonner";

const UNSPLASH_ACCESS_KEY = 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M';
const PEXELS_API_KEY = 'LHnYgHDxPvPMktxIKCwBcgXTEelbTyEPMH8a3D2LxdRo8aDqhIEEMUh9';
const PIXABAY_API_KEY = '21764229-f2bda4677445f1ed3fee62bb4';

interface ImageResult {
  url: string;
  alt?: string;
}

// Simple in-memory cache
const cache: { [key: string]: { images: ImageResult[]; timestamp: number } } = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

// Category-specific fallback images
const fallbackImages: { [key: string]: string } = {
  'venue': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'decor': 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'catering': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  'entertainment': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'photography': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'default': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
};

const getFallbackImage = (query: string): string => {
  const categoryMatches = {
    venue: ['hall', 'garden', 'hotel', 'resort', 'farmhouse', 'convention'],
    decor: ['decor', 'flower', 'light', 'stage', 'mandap'],
    catering: ['food', 'cuisine', 'catering', 'sweet', 'dessert'],
    entertainment: ['dj', 'dance', 'music', 'band', 'performer'],
    photography: ['photo', 'video', 'film', 'camera'],
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
    return data.photos.map((photo: any) => ({
      url: photo.src.large,
      alt: photo.alt
    }));
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
    return data.hits.map((img: any) => ({
      url: img.webformatURL,
      alt: img.tags
    }));
  } catch (error) {
    console.log('Pixabay API error:', error);
    return [];
  }
};

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    // Create a cache key
    const cacheKey = query.toLowerCase();

    // Check cache first
    const now = Date.now();
    const cachedData = cache[cacheKey];
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached image results');
      return cachedData.images;
    }

    // Try each API in sequence until we get results
    let results: ImageResult[] = [];
    
    results = await searchUnsplash(query);
    if (results.length === 0) {
      results = await searchPexels(query);
    }
    if (results.length === 0) {
      results = await searchPixabay(query);
    }

    if (results.length > 0) {
      // Store successful results in cache
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