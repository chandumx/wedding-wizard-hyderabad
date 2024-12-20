import { Location } from './types';

export const westLocations: Location = {
  name: "West Hyderabad",
  slug: "west-hyderabad",
  image: "/placeholder.svg",
  vendorCount: 450,
  description: "Discover premium wedding venues in the upscale areas of West Hyderabad, including Jubilee Hills, Banjara Hills, and Film Nagar.",
  areas: [
    { name: "Jubilee Hills", slug: "jubilee-hills", vendorCount: 85 },
    { name: "Banjara Hills", slug: "banjara-hills", vendorCount: 95 },
    { name: "Film Nagar", slug: "film-nagar", vendorCount: 45 },
    { name: "Madhapur", slug: "madhapur", vendorCount: 75 },
    { name: "Gachibowli", slug: "gachibowli", vendorCount: 80 },
    { name: "Kondapur", slug: "kondapur", vendorCount: 70 }
  ]
};