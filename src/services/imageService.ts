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

// Predefined fallback images for different categories
const fallbackImages: { [key: string]: string } = {
  venue: '/venue-placeholder.jpg',
  catering: '/catering-placeholder.jpg',
  photography: '/photography-placeholder.jpg',
  default: '/placeholder.svg'
};

const getFallbackImage = (query: string): string => {
  const category = Object.keys(fallbackImages).find(key => 
    query.toLowerCase().includes(key)
  );
  return fallbackImages[category || 'default'];
};

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    // Create a cache key
    const cacheKey = query;

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
    }

    return results;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export const getRandomImage = async (query: string): Promise<string> => {
  const images = await searchImages(query);
  if (images.length > 0) {
    return images[0].url;
  }
  
  // If all APIs fail, return a category-specific fallback
  const fallback = getFallbackImage(query);
  console.log(`Using fallback image for query "${query}":`, fallback);
  return fallback;
};