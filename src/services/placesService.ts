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

export const searchPlaces = async (
  query: string,
  location: { lat: number; lng: number }
): Promise<PlaceResult[]> => {
  const API_KEY = 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI';
  
  try {
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
    return data.places || [];
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Error fetching places data");
    }
    return [];
  }
};