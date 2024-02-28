import { AlbumImage } from "./Album";
import { PaginatedData } from "./Pagination";

export interface Show {
  available_markets: Array<string>;
  copyrights: [
    {
      text: string;
      type: string;
    }
  ];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<AlbumImage>;
  is_externally_hosted: boolean;
  languages: Array<string>;
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
  total_episodes: number;
}

export type PaginatedShows = PaginatedData<Show>;
