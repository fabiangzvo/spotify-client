import SpotifyApi from "./SpotifyApi";
import { RecentlyPlayed } from "../types/Player";

interface RecentlyPlayedProps {
  limit: number;
  after?: number;
  before?: number;
}

export async function GetRecentlyPlayed(
  props: RecentlyPlayedProps
): Promise<RecentlyPlayed> {
  const { limit } = props;

  const response = await SpotifyApi.get<RecentlyPlayed>(
    "/me/player/recently-played",
    {
      params: {
        limit,
      },
    }
  );

  return response.data;
}
