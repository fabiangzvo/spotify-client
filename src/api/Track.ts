import SpotifyApi from "./SpotifyApi";
import { Album } from "../types/Album";
import { Artist } from "../types/Artist";
import { FetchDataInterface } from "../types/Pagination";

interface RecommendationData extends FetchDataInterface {
  seed_genres: string;
}

export interface Seed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: string;
}

export interface Track {
  album: Album;
  artists: Array<Artist>;
  available_markets: ["string"];
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: false;
  linked_from: Record<string, unknown>;
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

interface RecommendationResponse {
  seeds: Array<Seed>;
  tracks: Array<Track>;
}

export async function GetRecommendations(
  props: RecommendationData
): Promise<RecommendationResponse> {
  const { offset = 0, seed_genres } = props;

  const response = await SpotifyApi.get<RecommendationResponse>(
    "/recommendations",
    {
      params: {
        offset,
        seed_genres,
      },
    }
  );

  return response.data;
}
