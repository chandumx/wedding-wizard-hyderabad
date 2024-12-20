import { Location } from './types';
import { oldCityLocations } from './old-city';
import { centralLocations } from './central';
import { westLocations } from './west';
import { northLocations } from './north';
import { eastLocations } from './east';
import { southLocations } from './south';

export const locations: Location[] = [
  oldCityLocations,
  centralLocations,
  westLocations,
  northLocations,
  eastLocations,
  southLocations
];

export * from './types';