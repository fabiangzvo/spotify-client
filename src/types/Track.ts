import { Album } from "./Album";
import { ArtistTrack } from "./Artist";

export interface Track {
  album: Album;
  artists: Array<ArtistTrack>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: string;
  explicit: boolean;
  external_ids: Record<string, string>;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
  is_playable?: false;
  linked_from?: Record<string, unknown>;
  restrictions?: {
    reason: string;
  };
}

export type TimeRange = "short_term" | "medium_term" | "long_term";
