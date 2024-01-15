export interface PlaylistImage {
  url: string;
  height: number;
  width: number;
}

export interface PlaylistOwner {
  external_url: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface Playlist {
  collaborative: string;
  description: string;
  external_url: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<PlaylistImage>;
  name: string;
  owner: PlaylistOwner;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface PaginatedPlaylists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<Playlist>;
}

export interface FeaturedPlaylistsResponse {
  message: string;
  playlists: PaginatedPlaylists;
}
