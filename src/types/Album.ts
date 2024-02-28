import { Artist } from "./Artist";
import { PaginatedData } from "./Pagination";

export interface AlbumImage {
  url: string;
  height: number;
  width: number;
}

export interface Album {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<AlbumImage>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: "market" | "product" | "explicit";
  };
  type: "album";
  uri: string;
  artists: Array<Artist>;
}

export type PaginatedAlbums = PaginatedData<Album>;
