import { Track } from "./Track";

export interface PlayHistory {
  track: Track;
  played_at: string;
  cursor: {
    after: string;
    before: string;
  };
  context?: {
    type: "artist" | "playlist" | "album" | "show";
    href: string;
    external_url: Record<string, unknown>;
    uri: string;
  };
}

export interface RecentlyPlayed {
  href: string;
  limit: number;
  next: string;
  total: number;
  items: Array<PlayHistory>;
}
