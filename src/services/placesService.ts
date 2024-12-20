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

interface PlacesResponse {
  places: PlaceResult[];
  nextPageToken?: string;
}

export const searchPlaces = async (
  query: string,
  location: { lat: number; lng: number },
  radius: number = 5000
): Promise<PlaceResult[]> => {
  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': localStorage.getItem('GOOGLE_PLACES_API_KEY') || '',
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
            radius: radius
          }
        },
        maxResultCount: 20
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch places');
    }

    const data: PlacesResponse = await response.json();
    return data.places;
  } catch (error) {
    toast.error("Error fetching places data");
    return [];
  }
}