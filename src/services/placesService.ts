import { toast } from "sonner";

interface PlaceResult {
  displayName: {
    text: string;
    languageCode: string;
  };
  formattedAddress: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
}

// Simple in-memory cache
const cache: { [key: string]: { places: PlaceResult[]; timestamp: number } } = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

export const searchPlaces = async (
  query: string,
  location: { lat: number; lng: number }
): Promise<PlaceResult[]> => {
  const API_KEY = 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI';
  
  try {
    // Create a cache key based on query and location
    const cacheKey = `${query}_${location.lat}_${location.lng}`;

    // Check cache first
    const now = Date.now();
    const cachedData = cache[cacheKey];
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached results');
      return cachedData.places;
    }

    // If not in cache or expired, fetch from Google Places API
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.websiteUri'
      },
      body: JSON.stringify({
        textQuery: query,
        locationBias: {
          circle: {
            center: {
              latitude: location.lat,
              longitude: location.lng
            },
            radius: 5000
          }
        },
        maxResultCount: 20
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to fetch places');
    }

    const data = await response.json();
    const places = data.places || [];

    // Store in cache
    cache[cacheKey] = {
      places,
      timestamp: now
    };

    return places;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Error fetching places data");
    }
    return [];
  }
};