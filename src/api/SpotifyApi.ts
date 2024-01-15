import axios from "axios";

import {
  getResponse,
  onRequestConfig,
  rejectResponse,
} from "../shared/AxiosConfig";

const SpotifyAxios = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_HOST,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

SpotifyAxios.interceptors.response.use(getResponse, rejectResponse);

SpotifyAxios.interceptors.request.use(onRequestConfig);

export default SpotifyAxios;
