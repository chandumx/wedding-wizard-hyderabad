import { ImageResult } from './types';
import { imageCache } from './cache';
import { LOCATION_FALLBACKS } from './config';
import { 
  unsplashProvider,
  pexelsProvider,
  pixabayProvider,
  googlePlacesProvider
} from './providers';

const providers = [
  unsplashProvider,
  pexelsProvider,
  pixabayProvider,
  googlePlacesProvider
];

const getFallbackImage = (query: string): string => {
  const locationKey = Object.keys(LOCATION_FALLBACKS).find(key => 
    query.toLowerCase().includes(key)
  );
  return LOCATION_FALLBACKS[locationKey || 'default'];
};

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const cacheKey = query.toLowerCase();
    const cachedResults = imageCache.get(cacheKey);
    
    if (cachedResults) {
      console.log('Returning cached results');
      return cachedResults;
    }

    for (const provider of providers) {
      try {
        const results = await provider.search(query);
        if (results.length > 0) {
          console.log(`${provider.name} results:`, results.length);
          imageCache.set(cacheKey, results);
          return results;
        }
      } catch (error) {
        console.log(`${provider.name} failed, trying next provider`);
      }
    }

    // If all providers fail, return a fallback image
    return [{ url: getFallbackImage(query), alt: query }];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [{ url: getFallbackImage(query), alt: query }];
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