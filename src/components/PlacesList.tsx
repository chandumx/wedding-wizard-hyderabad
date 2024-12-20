import { useEffect, useState } from "react";
import { searchPlaces } from "../services/placesService";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

interface Place {
  displayName: {
    text: string;
    languageCode: string;
  };
  formattedAddress: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
}

interface PlacesListProps {
  query: string;
  location: { lat: number; lng: number };
}

export const PlacesList = ({ query, location }: PlacesListProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      const results = await searchPlaces(query, location);
      setPlaces(results);
      setLoading(false);
    };

    if (query && location) {
      fetchPlaces();
    }
  }, [query, location]);

  if (loading) {
    return <div className="text-center py-8">Loading places...</div>;
  }

  if (places.length === 0) {
    return <div className="text-center py-8">No places found</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {places.map((place, index) => (
        <Card key={index} className="p-4">
          <h3 className="font-semibold mb-2">{place.displayName.text}</h3>
          <p className="text-sm text-gray-600 mb-2">{place.formattedAddress}</p>
          {place.rating && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{place.rating}</span>
              {place.userRatingCount && (
                <span className="text-gray-400">({place.userRatingCount} reviews)</span>
              )}
            </div>
          )}
          {place.websiteUri && (
            <a
              href={place.websiteUri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline mt-2 block"
            >
              Visit Website
            </a>
          )}
        </Card>
      ))}
    </div>
  );
};