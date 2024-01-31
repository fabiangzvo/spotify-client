import { AlbumImage } from "./Album";

export type UserState = User | null;

export interface UserContextProps {
  user: UserState;
}

export interface User {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<AlbumImage>;
  type: "user";
  uri: string;
  followers: {
    href: string | null;
    total: number;
  };
  country: string;
  product: "premium" | "free" | "open";
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  email: "faguzman.97@gmail.com";
}
