import { PaginatedAlbums } from "./Album";
import { PaginatedArtists } from "./Artist";
import { PaginatedAudioBooks } from "./AudioBook";
import { PaginatedEpisodes } from "./Episodes";
import { PaginatedPlaylists } from "./Playlist";
import { PaginatedShows } from "./Show";
import { PaginatedTracks } from "./Track";

export interface SearchResponse {
  albums: PaginatedAlbums;
  artists: PaginatedArtists;
  audiobooks: PaginatedAudioBooks;
  episodes: PaginatedEpisodes;
  playlists: PaginatedPlaylists;
  shows: PaginatedShows;
  tracks: PaginatedTracks;
}
