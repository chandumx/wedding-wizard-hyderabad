import { ImageProvider, ImageResult } from '../types';
import { API_KEYS } from '../config';

export const unsplashProvider: ImageProvider = {
  name: 'Unsplash',
  search: async (query: string): Promise<ImageResult[]> => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
        {
          headers: {
            'Authorization': `Client-ID ${API_KEYS.UNSPLASH}`
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
  }
};