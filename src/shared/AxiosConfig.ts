import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

function getResponse(response: AxiosResponse) {
  return response;
}

async function rejectResponse(error: AxiosError): Promise<AxiosError> {
  const { message, response: { status = 500 } = {} } = error;

  const messageError = { status, message } as AxiosError;

  if (!status && !message)
    return { status: 500, message: "Request error" } as AxiosError;

  if (status === 401) {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          grant_type: "refresh_token",
          refresh_token: localStorage.getItem("spotify-token"),
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status !== 200) {
        localStorage.removeItem("spotify-token");
        window.location.reload();
      } else {
        localStorage.setItem("spotify-token", response.data.accessToken);
      }
    } catch (e) {
      localStorage.removeItem("spotify-token");
      window.location.reload();
    }
  } else {
    console.error("Intercept: ", JSON.stringify(messageError, null, 2));
  }
  return messageError;
}

function onRequestConfig(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "spotify-token"
  )}`;

  return config;
}

export { onRequestConfig, rejectResponse, getResponse };
