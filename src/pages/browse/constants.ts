/* eslint-disable no-case-declarations */
import { SearchResponse } from "types/Search";
import { PaginatedData } from "types/Pagination";
import { Artist } from "types/Artist";
import { Track } from "types/Track";
import { Album } from "types/Album";
import { AudioBook } from "types/AudioBook";
import { Episode } from "types/Episodes";
import { Playlist } from "types/Playlist";
import { Show } from "types/Show";

export enum SearchActionKind {
  SET = "set",
  ADD = "add",
  RESET = "reset",
  INITIALIZE = "initialize",
}

export enum SearchPropertyKind {
  ALBUM = "albums",
  ARTIST = "artists",
  AUDIOBOOK = "audiobooks",
  EPISODE = "episodes",
  PLAYLIST = "playlists",
  SHOW = "shows",
  TRACK = "tracks",
}

export interface SearchAction {
  type: SearchActionKind;
  property: SearchPropertyKind;
  payload: PaginatedData<
    Album | Artist | AudioBook | Episode | Playlist | Show | Track
  >;
}

export function searchReducer(state: SearchResponse, action: SearchAction) {
  const { type, payload, property } = action;

  switch (type) {
    case SearchActionKind.ADD:
      const { items: newItems, ...data } = payload;
      const { items, ...paginateProperties } = state[property];

      return {
        ...state,
        [property]: {
          ...paginateProperties,
          ...data,
          items: [...items, ...newItems],
        },
      };
    case SearchActionKind.SET:
      return {
        ...state,
        [property]: payload,
      };

    case SearchActionKind.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export const INITIAL_EMPTY_STATE = {
  href: "",
  items: [],
  limit: 0,
  next: "",
  offset: 0,
  previous: "",
  total: 0,
};

export const INITIAL_STATE: SearchResponse = {
  albums: INITIAL_EMPTY_STATE,
  artists: INITIAL_EMPTY_STATE,
  audiobooks: INITIAL_EMPTY_STATE,
  episodes: INITIAL_EMPTY_STATE,
  playlists: INITIAL_EMPTY_STATE,
  shows: INITIAL_EMPTY_STATE,
  tracks: INITIAL_EMPTY_STATE,
};
