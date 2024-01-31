import SpotifyApi from "./SpotifyApi";
import { Track, TimeRange } from "../types/Track";
import { FetchDataInterface, PaginatedData } from "../types/Pagination";
import { User } from "../types/User";

interface UserTop extends FetchDataInterface {
  type: "artists" | "tracks";
  time_range: TimeRange;
}

export async function GetUserTop(
  props: UserTop
): Promise<PaginatedData<Track>> {
  const { offset = 0, limit = 20, type, time_range } = props;

  const response = await SpotifyApi.get<PaginatedData<Track>>(
    `/me/top/${type}`,
    {
      params: {
        offset,
        limit,
        time_range,
      },
    }
  );

  return response.data;
}

export async function GetUserInfo(): Promise<User> {
  const response = await SpotifyApi.get<User>("/me");

  return response.data;
}
