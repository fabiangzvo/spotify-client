import { useCallback, useContext } from "react";
import SpotifyLogin from "react-spotify-login";

import { AuthContext } from "../../context/authContext";

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
    <main className="w-screen h-screen flex max-lg:flex-col justify-around items-center">
      <div className="flex flex-col w-2/4 p-5 max-lg:w-full h-auto">
        <div className="flex flex-col justify-center items-center text-paragraph">
          <div className="w-2/4 max-lg:w-full relative flex items-center justify-center max-lg:mt-40">
            <img src="/spotify.png" alt="spotify-image" />
            <span className="absolute bottom-0 w-full h-20 flex items-center bg-gradient-to-t from-background to-transparent px-3 py-1" />
          </div>
          <h1 className="relative text-title text-7xl md:text-4xl text-center font-bold tracking-tighter">
            Good music makes good times
          </h1>
          <article className="text-2xl md:text-xl max-lg:text-xl text-center mt-10">
            The best music streaming platform for all your favorite tunes.
            Listen to millions of songs, discover new artists, and create the
            perfect playlists. Sign in to your account to enjoy the ultimate
            music experience.
          </article>
        </div>
        <div className="flex flex-col items-center">
          <SpotifyLogin
            className="w-1/3 mt-10 text-2xl md:text-xl font-bold text-title bg-primary rounded-full p-3 hover:bg-secondary"
            buttonText="Sign in"
            clientId={import.meta.env.VITE_SPOTIFY_CLIENT_ID}
            redirectUri={window.location.origin}
            onSuccess={onSuccess}
            onFailure={onFailure}
            scope="user-top-read,user-read-email,user-read-recently-played"
          />
          <span className="text-xl text-paragraph pt-5 md:text-lg">
            Don't have an account?&nbsp;
            <a
              className="text-2xl md:text-xl text-title font-extrabold hover:underline"
              href="https://www.spotify.com/co-es/signup"
              target="_blank"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Home;
