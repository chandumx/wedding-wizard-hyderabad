import { FallbackImages } from './types';

export const fallbackImages: FallbackImages = {
  'venue': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'decor': 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'catering': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  'entertainment': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'photography': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'gifts': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  'films': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  'lighting': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'garden': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'default': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
};

export const getFallbackImage = (query: string): string => {
  const categoryMatches = {
    venue: ['hall', 'garden', 'hotel', 'resort', 'farmhouse', 'convention', 'lawn', 'banquet'],
    decor: ['decor', 'flower', 'stage', 'mandap', 'theme'],
    catering: ['food', 'cuisine', 'catering', 'sweet', 'dessert'],
    entertainment: ['dj', 'dance', 'music', 'band', 'performer', 'live'],
    photography: ['photo', 'camera'],
    films: ['film', 'video', 'cinema', 'wedding film'],
    gifts: ['gift', 'return gift', 'present'],
    lighting: ['light', 'ambience', 'ambient'],
    garden: ['lawn', 'garden', 'outdoor']
  };

  const category = Object.entries(categoryMatches).find(([_, keywords]) =>
    keywords.some(keyword => query.toLowerCase().includes(keyword))
  )?.[0];

  return fallbackImages[category || 'default'];
};