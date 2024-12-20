import { ImageResult } from './types';

const UNSPLASH_ACCESS_KEY = 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M';

export const searchUnsplash = async (query: string): Promise<ImageResult[]> => {
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