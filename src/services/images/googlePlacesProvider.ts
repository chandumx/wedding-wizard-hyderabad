import { ImageResult } from './types';

const GOOGLE_API_KEY = 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI';

export const searchGooglePlaces = async (query: string): Promise<ImageResult[]> => {
  try {
    // First, search for a place
    const searchResponse = await fetch(
      `https://places.googleapis.com/v1/places:searchText`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'places.id,places.photos'
        },
        body: JSON.stringify({
          textQuery: query,
          maxResultCount: 1
        })
      }
    );

    if (!searchResponse.ok) {
      throw new Error(`Google Places search error: ${searchResponse.status}`);
    }

    const searchData = await searchResponse.json();
    if (!searchData.places?.[0]?.photos?.[0]) {
      return [];
    }

    const photo = searchData.places[0].photos[0];
    
    // Then, get the photo
    const photoResponse = await fetch(
      `https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=800&maxWidthPx=800&key=${GOOGLE_API_KEY}`,
      {
        headers: {
          'X-Goog-Api-Key': GOOGLE_API_KEY
        }
      }
    );

    if (!photoResponse.ok) {
      throw new Error(`Google Places photo error: ${photoResponse.status}`);
    }

    const photoData = await photoResponse.json();
    return [{
      url: photoData.photoUri,
      alt: query
    }];
  } catch (error) {
    console.log('Google Places API error:', error);
    return [];
  }
};