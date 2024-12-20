import { ImageProvider, ImageResult } from '../types';
import { RateLimiter } from '../utils/rateLimiter';
import { API_KEYS } from '../config';

const rateLimiter = new RateLimiter(30, 60); // 30 requests per minute

export const unsplashProvider: ImageProvider = {
  name: 'Unsplash',
  search: async (query: string): Promise<ImageResult[]> => {
    try {
      await rateLimiter.waitForAvailability();
      
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
        {
          headers: {
            'Authorization': `Client-ID ${API_KEYS.UNSPLASH}`
          }
        }
      );

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('Unsplash rate limit exceeded, falling back to next provider');
          return [];
        }
        throw new Error(`Unsplash API error: ${response.status}`);
      }

      const data = await response.json();
      return data.results.map((img: any) => ({
        url: img.urls.regular,
        alt: img.alt_description
      }));
    } catch (error) {
      console.warn('Unsplash API error:', error);
      return [];
    }
  }
};