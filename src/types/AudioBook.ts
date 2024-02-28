import { PaginatedData } from "./Pagination";
import { AlbumImage } from "./Album";

export interface Chapter {
  audio_preview_url: string;
  available_markets: Array<string>;
  chapter_number: number;
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
  is_playable: boolean;
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
}

export interface AudioBook {
  authors: Array<{ name: string }>;
  available_markets: Array<string>;
  copyrights: Array<{ text: string; type: string }>;
  description: string;
  html_description: string;
  edition: "Unabridged";
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<AlbumImage>;
  languages: Array<string>;
  media_type: string;
  name: string;
  narrators: Array<{ name: string }>;
  publisher: string;
  type: "audiobook";
  uri: string;
  total_chapters: number;
  chapters: PaginatedData<Chapter>;
}

export type PaginatedAudioBooks = PaginatedData<AudioBook>;
