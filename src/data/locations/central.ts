import { Location } from './types';

export const centralLocations: Location = {
  name: "Central Hyderabad",
  slug: "central-hyderabad",
  image: "/placeholder.svg",
  vendorCount: 300,
  description: "Premium wedding venues in the heart of Hyderabad, featuring a mix of historic and modern celebration spaces.",
  areas: [
    { name: "Nampally", slug: "nampally", vendorCount: 50 },
    { name: "Abids", slug: "abids", vendorCount: 45 },
    { name: "Troop Bazaar", slug: "troop-bazaar", vendorCount: 35 },
    { name: "Gunfoundry", slug: "gunfoundry", vendorCount: 40 },
    { name: "Mozamjahi Market", slug: "mozamjahi-market", vendorCount: 65 },
    { name: "Malakunta", slug: "malakunta", vendorCount: 65 }
  ]
};