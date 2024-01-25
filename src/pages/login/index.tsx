import { useCallback, useContext } from "react";
import SpotifyLogin from "react-spotify-login";

import { AuthContext } from "../../context/AuthContext";

interface successEvent {
  access_token: string;
}

function Home() {
  const { refreshAuthContext } = useContext(AuthContext);

  const onSuccess = useCallback(
    (response: successEvent) => {
      localStorage.setItem("spotify-token", response.access_token);

      refreshAuthContext();
    },
    [refreshAuthContext]
  );

  const onFailure = useCallback(
    (response: unknown) => console.error(response),
    []
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center text-paragraph">
        <h1 className="text-7xl max-md:text-4xl">
          ¡Descubre la magia de la música con nuestra nueva webapp!
        </h1>
        <article className="text-2xl max-md:text-xl">
          Integramos el poderoso API de Spotify para ofrecerte una experiencia
          única. Explora playlists personalizadas, descubre artistas emergentes
          y crea tu propia sinfonía personalizada.
        </article>
      </div>
      <div className="flex flex-col">
        <SpotifyLogin
          className="text-2xl font-bold text-paragraph bg-primary rounded-full p-3 hover:bg-secondary"
          buttonText="Iniciar sesión"
          clientId={import.meta.env.VITE_SPOTIFY_CLIENT_ID}
          redirectUri={window.location.origin}
          onSuccess={onSuccess}
          onFailure={onFailure}
          scope="user-top-read,user-read-email,user-read-recently-played"
        />
        <span className="text-xl text-paragraph pt-5 max-md:text-lg">
          ¿No tienes cuenta?&nbsp;
          <a
            className="text-2xl max-md:text-xl text-paragraph font-extrabold hover:underline"
            href="https://www.spotify.com/co-es/signup"
            target="_blank"
          >
            crear cuenta
          </a>
        </span>
      </div>
    </main>
  );
}

export default Home;
