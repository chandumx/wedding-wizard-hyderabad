export interface Location {
  name: string;
  slug: string;
  image: string;
  description: string;
  areas: SubLocation[];
}

export interface SubLocation {
  name: string;
  slug: string;
  description?: string;
  location?: {
    lat: number;
    lng: number;
  };
}