import { AlbumImage } from "./Album";
import { PaginatedData } from "./Pagination";

export interface Artist {
  external_urls: Record<string, unknown>;
  followers: {
    href: string | null;
    total: number;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<AlbumImage>;
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export type PaginatedArtists = PaginatedData<Artist>;

export type ArtistTrack = Pick<
  Artist,
  "external_urls" | "href" | "id" | "name" | "type" | "uri"
>;
