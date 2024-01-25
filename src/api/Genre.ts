import SpotifyApi from "./SpotifyApi";

interface GenresResponse {
  genres: Array<string>;
}

export async function GetGenres(): Promise<GenresResponse> {
  const response = await SpotifyApi.get<GenresResponse>(
    "/recommendations/available-genre-seeds"
  );

  return response.data || { genres: [] };
}
