import { toast } from "sonner";

const UNSPLASH_ACCESS_KEY = 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M';

interface UnsplashImage {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

// Simple in-memory cache
const cache: { [key: string]: { images: UnsplashImage[]; timestamp: number } } = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

export const searchImages = async (query: string, count: number = 1): Promise<UnsplashImage[]> => {
  try {
    // Create a cache key
    const cacheKey = `${query}_${count}`;

    // Check cache first
    const now = Date.now();
    const cachedData = cache[cacheKey];
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached image results');
      return cachedData.images;
    }

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    const images = data.results;

    // Store in cache
    cache[cacheKey] = {
      images,
      timestamp: now
    };

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    toast.error('Failed to load images');
    return [];
  }
};

export const getRandomImage = async (query: string): Promise<string> => {
  const images = await searchImages(query, 1);
  return images.length > 0 ? images[0].urls.regular : '/placeholder.svg';
};