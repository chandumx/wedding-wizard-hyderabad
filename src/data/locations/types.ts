export interface Location {
  name: string;
  slug: string;
  image: string;
  vendorCount: number;
  description: string;
  areas: SubLocation[];
}

export interface SubLocation {
  name: string;
  slug: string;
  vendorCount: number;  // Making vendorCount required instead of optional
  description?: string;
}