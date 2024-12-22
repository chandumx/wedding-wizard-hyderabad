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
  name: string;
  search: (query: string) => Promise<ImageResult[]>;
}

export interface LocationImageMapping {
  [key: string]: string;
}