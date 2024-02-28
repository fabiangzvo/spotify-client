import { SearchResponse } from "types/Search";
import SpotifyApi from "./SpotifyApi";

interface RecentlyPlayedProps {
  q: string;
  type?: Array<string>;
}

export async function search(
  props: RecentlyPlayedProps
): Promise<SearchResponse> {
  const { q, type = "album,artist,playlist,track,show,episode,audiobook" } =
    props;

  const response = await SpotifyApi.get<SearchResponse>("/search", {
    params: {
      q,
      type,
    },
  });

  return response.data;
}
