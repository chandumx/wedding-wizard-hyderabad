import { useEffect, useState } from "react";
import { searchPlaces } from "../services/placesService";
import { Card } from "./ui/card";
import { Star, MapPin, Globe, Navigation } from "lucide-react";
import { Button } from "./ui/button";

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

  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg text-gray-600">Loading places...</div>
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg text-gray-600">No places found</div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {places.map((place, index) => (
        <Card 
          key={index} 
          className="p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-display font-semibold mb-3 text-left">
              {place.displayName.text}
            </h3>
            <div className="flex items-start gap-2 mb-3 text-gray-600">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-sm text-left">{place.formattedAddress}</p>
            </div>
            {place.rating && (
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{place.rating}</span>
                {place.userRatingCount && (
                  <span className="text-sm text-gray-500">
                    ({place.userRatingCount} reviews)
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 mt-4">
            {place.websiteUri && (
              <a
                href={place.websiteUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <Globe className="w-4 h-4" />
                Visit Website
              </a>
            )}
            <a
              href={getGoogleMapsUrl(place.formattedAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <Navigation className="w-4 h-4" />
              View on Maps
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};