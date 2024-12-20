import { ImageResult, ImageCache } from './types';
import { searchUnsplash } from './unsplashProvider';
import { searchPexels } from './pexelsProvider';
import { searchPixabay } from './pixabayProvider';
import { searchGooglePlaces } from './googlePlacesProvider';
import { getFallbackImage } from './fallbackImages';

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const cache: ImageCache = {};

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const cacheKey = query.toLowerCase();
    const now = Date.now();
    const cachedData = cache[cacheKey];
    
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached results');
      return cachedData.images;
    }

    let results: ImageResult[] = [];
    
    // Try each API in sequence
    const apis = [
      { fn: searchUnsplash, name: 'Unsplash' },
      { fn: searchPexels, name: 'Pexels' },
      { fn: searchPixabay, name: 'Pixabay' },
      { fn: searchGooglePlaces, name: 'Google Places' }
    ];

    for (const api of apis) {
      if (results.length === 0) {
        try {
          results = await api.fn(query);
          console.log(`${api.name} results:`, results.length);
        } catch (error) {
          console.log(`${api.name} failed, trying next API`);
        }
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