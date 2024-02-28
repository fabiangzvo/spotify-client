import { AlbumImage } from "./Album";
import { PaginatedData } from "./Pagination";
import { Show } from "./Show";

export interface Episode {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<AlbumImage>;
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: Array<string>;
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: "episode";
  uri: string;
  restrictions: {
    reason: string;
  };
  show: Show;
}

export type PaginatedEpisodes = PaginatedData<Episode>;
