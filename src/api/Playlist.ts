import SpotifyApi from "./SpotifyApi";
import {
  FeaturedPlaylistsResponse,
  PaginatedPlaylists,
} from "../types/Playlist";
import { FetchDataInterface } from "../types/Pagination";

export async function GetFeaturedPLaylists(
  props: FetchDataInterface
): Promise<FeaturedPlaylistsResponse> {
  const { offset = 0, limit = 20 } = props;

  const response = await SpotifyApi.get<FeaturedPlaylistsResponse>(
    "/browse/featured-playlists",
    {
      params: {
        offset,
        limit,
      },
    }
  );

  return response.data;
}

export async function GetPLaylists(
  props: FetchDataInterface
): Promise<PaginatedPlaylists> {
  const { offset = 0, limit = 20 } = props;

  const response = await SpotifyApi.get<PaginatedPlaylists>("/me/playlists", {
    params: {
      offset,
      limit,
    },
  });

  return response.data;
}
