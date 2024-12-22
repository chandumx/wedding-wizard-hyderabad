export const config = {
  UNSPLASH: process.env.UNSPLASH_API_KEY || '',
  PEXELS: process.env.PEXELS_API_KEY || '',
  PIXABAY: process.env.PIXABAY_API_KEY || '',
  GOOGLE: {
    API_KEY: process.env.GOOGLE_API_KEY || '',
    SEARCH_ENGINE_ID: process.env.GOOGLE_SEARCH_ENGINE_ID || '',
  },
  GOOGLE_API: process.env.GOOGLE_API_KEY || '', // Added for backwards compatibility
};

export default config;