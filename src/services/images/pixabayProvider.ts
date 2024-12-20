import { ImageResult } from './types';

const PIXABAY_API_KEY = '21764229-f2bda4677445f1ed3fee62bb4';

export const searchPixabay = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&per_page=1`
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
};