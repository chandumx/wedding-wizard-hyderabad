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

export interface ImageProvider {
  search: (query: string) => Promise<ImageResult[]>;
  name: string;
}

export interface FallbackImages {
  [key: string]: string;
}