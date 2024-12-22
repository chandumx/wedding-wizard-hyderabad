import { ImageResult } from './images/types';
import { imageCache } from './images/cache';
import { getLocationImage } from './images/locationImages';
import { toast } from 'sonner';

const UNSPLASH_ACCESS_KEY = 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M';

export const searchImages = async (query: string): Promise<ImageResult[]> => {
  try {
    const cacheKey = query.toLowerCase();
    const cachedResults = imageCache.get(cacheKey);
    
    if (cachedResults) {
      console.log('Returning cached results');
      return cachedResults;
    }

    // Check if it's a location query
    if (query.toLowerCase().includes('location hyderabad india')) {
      const locationName = query.split(' location')[0];
      const fallbackUrl = getLocationImage(locationName);
      return [{ url: fallbackUrl, alt: locationName }];
    }

    // Try Unsplash with rate limit handling
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
        {
          headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
          }
        }
      );

      if (response.status === 403) {
        throw new Error('Rate limit exceeded');
      }

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }

      const data = await response.json();
      const results = data.results.map((img: any) => ({
        url: img.urls.regular,
        alt: img.alt_description
      }));

      if (results.length > 0) {
        imageCache.set(cacheKey, results);
        return results;
      }
    } catch (error) {
      console.warn('Unsplash API error:', error);
      toast.error('Image API rate limit reached, using fallback images');
    }

    // Use fallback image
    const fallbackUrl = getLocationImage('default');
    return [{ url: fallbackUrl, alt: query }];
  } catch (error) {
    console.error('Error fetching images:', error);
    const fallbackUrl = getLocationImage('default');
    return [{ url: fallbackUrl, alt: query }];
  }
};

export const getRandomImage = async (query: string): Promise<string> => {
  try {
    const images = await searchImages(query);
    return images[0]?.url || getLocationImage('default');
  } catch (error) {
    console.error('Error getting random image:', error);
    return getLocationImage('default');
  }
};