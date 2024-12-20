import { Location } from './types';

export const northLocations: Location = {
  name: "North Hyderabad",
  slug: "north-hyderabad",
  image: "/placeholder.svg",
  vendorCount: 280,
  description: "Explore wedding venues in the vibrant North Hyderabad area, including Secunderabad, Kompally, and surrounding regions.",
  areas: [
    { name: "Secunderabad", slug: "secunderabad", vendorCount: 65 },
    { name: "Kompally", slug: "kompally", vendorCount: 45 },
    { name: "Alwal", slug: "alwal", vendorCount: 40 },
    { name: "Sainikpuri", slug: "sainikpuri", vendorCount: 35 },
    { name: "Bowenpally", slug: "bowenpally", vendorCount: 50 },
    { name: "Begumpet", slug: "begumpet", vendorCount: 45 }
  ]
};