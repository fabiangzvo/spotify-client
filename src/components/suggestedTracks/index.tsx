import { useEffect, useState } from "react";

import { GetRecommendations, Seed, Track } from "../../api/Track";
import { GetGenres } from "../../api/Genre";

function SuggestedTracks() {
  const [genres, setGenres] = useState<Array<string>>([]);
  const [seeds, setSeeds] = useState<Array<Seed>>([]);
  const [tracks, setTracks] = useState<Array<Track>>([]);

  useEffect(() => {
    async function getInitialData() {
      if (genres.length <= 0) {
        const { genres: items } = await GetGenres();

        setGenres(items.slice(0, 5));
      }

      const { seeds, tracks } = await GetRecommendations({
        offset: 20,
        seed_genres: genres.join(","),
      });

      setTracks(tracks);
      setSeeds(seeds);
    }

    getInitialData();
  }, [genres]);

  return (
    <div className="w-[40vw]">
      SuggestedTracks
      <div className="h-full inline-block relative top-[-6rem]">
        <ol>
          {tracks.map((i) => (
            <li key={i.id} className="text-paragraph">
              {i.name}
            </li>
          ))}
        </ol>
        <ol>
          {seeds.map((i) => (
            <li key={i.id} className="text-paragraph">
              {i.id}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SuggestedTracks;
