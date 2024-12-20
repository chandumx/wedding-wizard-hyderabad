import { ImageResult } from './types';
import { imageCache } from './cache';
import { getFallbackImage } from './fallbackImages';
import { 
  unsplashProvider,
  pexelsProvider,
  pixabayProvider,
  googlePlacesProvider
} from './providers';
import { toast } from 'sonner';

const providers = [
  unsplashProvider,
  pexelsProvider,
  pixabayProvider,
  googlePlacesProvider
];

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const cacheKey = query.toLowerCase();
    const cachedResults = imageCache.get(cacheKey);
    
    if (cachedResults) {
      console.log('Returning cached results');
      return cachedResults;
    }

    let lastError: Error | null = null;

    for (const provider of providers) {
      try {
        const results = await provider.search(query);
        if (results.length > 0) {
          console.log(`${provider.name} results:`, results.length);
          imageCache.set(cacheKey, results);
          return results;
        }
      } catch (error) {
        lastError = error as Error;
        console.warn(`${provider.name} failed:`, error);
      }
    }

    // If all providers fail, use fallback image
    const fallbackUrl = getFallbackImage(query);
    const fallbackResult = [{ url: fallbackUrl, alt: query }];
    
    if (lastError) {
      toast.error('Unable to load image from providers, using fallback image');
    }
    
    return fallbackResult;
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