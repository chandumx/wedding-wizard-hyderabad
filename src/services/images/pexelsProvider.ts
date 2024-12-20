import { ImageResult } from './types';

const PEXELS_API_KEY = 'LHnYgHDxPvPMktxIKCwBcgXTEelbTyEPMH8a3D2LxdRo8aDqhIEEMUh9';

export const searchPexels = async (query: string): Promise<ImageResult[]> => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos.map((photo: any) => ({
        url: photo.src.large,
        alt: photo.alt
      }));
    }
    return [];
  } catch (error) {
    console.log('Pexels API error:', error);
    return [];
  }
};