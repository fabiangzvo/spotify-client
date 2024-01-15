import SpotifyApi from "./SpotifyApi";
import { PaginatedAlbum } from "../types/Album";
import { FetchDataInterface } from "../types/Pagination";

interface NewReleaseAlbums {
  albums: PaginatedAlbum;
}

export async function GetNewReleases(
  props: FetchDataInterface
): Promise<NewReleaseAlbums> {
  const { offset = 0, limit = 20 } = props;

  const response = await SpotifyApi.get<NewReleaseAlbums>(
    "/browse/new-releases",
    {
      params: {
        offset,
        limit,
      },
    }
  );

  return response.data;
}
