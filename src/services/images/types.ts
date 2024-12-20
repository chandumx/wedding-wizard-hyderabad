export interface ImageResult {
  url: string;
  alt?: string;
}

export interface CacheEntry {
  images: ImageResult[];
  timestamp: number;
}

export interface ImageCache {
  [key: string]: CacheEntry;
}

export interface FallbackImages {
  [key: string]: string;
}