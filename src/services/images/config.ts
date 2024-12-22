export const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const API_KEYS = {
  UNSPLASH: process.env.UNSPLASH_API_KEY || 'DNH7NdnkE5bHSFWaNL9lsnw-iGRPl7SAoBI9ssLqk2M',
  PEXELS: process.env.PEXELS_API_KEY || 'LHnYgHDxPvPMktxIKCwBcgXTEelbTyEPMH8a3D2LxdRo8aDqhIEEMUh9',
  PIXABAY: process.env.PIXABAY_API_KEY || '21764229-f2bda4677445f1ed3fee62bb4',
  GOOGLE: {
    API_KEY: process.env.GOOGLE_API_KEY || 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI',
    SEARCH_ENGINE_ID: process.env.GOOGLE_SEARCH_ENGINE_ID || '99f2770f414134e60',
  },
  GOOGLE_API: process.env.GOOGLE_API_KEY || 'AIzaSyA5ct4MJsei6Y5EyyakNATfhTWz0uwVTDI', // Added for backwards compatibility
};

export const FALLBACK_IMAGES = {
  location: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  wedding: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  venue: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
};

export default {
  CACHE_DURATION,
  API_KEYS,
  FALLBACK_IMAGES
};