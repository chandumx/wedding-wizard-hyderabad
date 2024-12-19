import { Location } from './types';
import { oldCityLocations } from './old-city';
import { centralLocations } from './central';

// Import all other location files here...

export const locations: Location[] = [
  oldCityLocations,
  centralLocations,
  // Add other locations here...
];

export * from './types';