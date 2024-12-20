import { Location } from './types';

export const eastLocations: Location = {
  name: "East Hyderabad",
  slug: "east-hyderabad",
  image: "/placeholder.svg",
  vendorCount: 320,
  description: "Find perfect wedding venues in East Hyderabad, covering areas like Uppal, LB Nagar, and nearby localities.",
  areas: [
    { name: "Uppal", slug: "uppal", vendorCount: 55 },
    { name: "LB Nagar", slug: "lb-nagar", vendorCount: 65 },
    { name: "Dilsukhnagar", slug: "dilsukhnagar", vendorCount: 70 },
    { name: "Nacharam", slug: "nacharam", vendorCount: 45 },
    { name: "Malakpet", slug: "malakpet", vendorCount: 50 },
    { name: "Malkajgiri", slug: "malkajgiri", vendorCount: 35 }
  ]
};