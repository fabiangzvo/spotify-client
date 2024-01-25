import SpotifyApi from "./SpotifyApi";
import { Track } from "../types/Track";
import { Seed } from "../types/Seed";
import { FetchDataInterface } from "../types/Pagination";

interface RecommendationData extends FetchDataInterface {
  seed_genres: string;
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

  return response.data || { seeds: [], tracks: [] };
}
