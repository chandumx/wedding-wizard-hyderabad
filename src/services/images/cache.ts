import { ImageResult, ImageCache } from './types';

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

class ImageCacheService {
  private cache: ImageCache = {};

  get(key: string): ImageResult[] | null {
    const entry = this.cache[key];
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > CACHE_DURATION) {
      delete this.cache[key];
      return null;
    }

    return entry.images;
  }

  set(key: string, images: ImageResult[]): void {
    this.cache[key] = {
      images,
      timestamp: Date.now()
    };
  }
}

export const imageCache = new ImageCacheService();