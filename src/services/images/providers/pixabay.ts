import { ImageProvider, ImageResult } from '../types';
import { API_KEYS } from '../config';

export const pixabayProvider: ImageProvider = {
  name: 'Pixabay',
  search: async (query: string): Promise<ImageResult[]> => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEYS.PIXABAY}&q=${encodeURIComponent(query)}&per_page=1`
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
  }
};