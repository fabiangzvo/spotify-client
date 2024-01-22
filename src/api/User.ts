import SpotifyApi from "./SpotifyApi";
import { AlbumImage, Album } from "../types/Album";
import { FetchDataInterface, PaginatedData } from "../types/Pagination";

interface Artist {
  external_urls: Record<string, unknown>;
  followers: {
    href: string | null;
    total: number;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<AlbumImage>;
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

type ArtistTrack = Pick<
  Artist,
  "external_urls" | "href" | "id" | "name" | "type" | "uri"
>;

interface Track {
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
}

export async function GetUserTop(
  props: FetchDataInterface
): Promise<PaginatedData<Track>> {
  const { offset = 0, limit = 20 } = props;

  const response = await SpotifyApi.get<PaginatedData<Track>>(
    "/me/top/tracks",
    {
      params: {
        offset,
        limit,
      },
    }
  );

  return response.data;
}
