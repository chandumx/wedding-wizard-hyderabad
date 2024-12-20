import { toast } from "sonner";
import { connectToMongo } from "./mongoService";

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

export const searchPlaces = async (
  query: string,
  location: { lat: number; lng: number }
): Promise<PlaceResult[]> => {
  const API_KEY = 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI';
  
  try {
    // Connect to MongoDB
    const db = await connectToMongo();
    const cache = db.collection('places_cache');

    // Create a cache key based on query and location
    const cacheKey = `${query}_${location.lat}_${location.lng}`;

    // Check cache first
    const cachedResult = await cache.findOne({ key: cacheKey });
    if (cachedResult) {
      console.log('Returning cached results');
      return cachedResult.places;
    }

    // If not in cache, fetch from Google Places API
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
    await cache.updateOne(
      { key: cacheKey },
      { $set: { key: cacheKey, places, timestamp: new Date() } },
      { upsert: true }
    );

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