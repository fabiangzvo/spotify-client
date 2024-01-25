import { useEffect, useState } from "react";

import { GetRecommendations } from "../../api/Track";
import { Track } from "../../types/Track";
import { Seed } from "../../types/Seed";
import ListOfTracks from "../listOfTracks";

interface SuggestedTracksProps {
  genres: string;
}

function SuggestedTracks(props: SuggestedTracksProps) {
  const { genres } = props;

  const [_seeds, setSeeds] = useState<Array<Seed>>([]);
  const [tracks, setTracks] = useState<Array<Track>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      if (!genres) return;

      setLoading(true);

      const { seeds, tracks } = await GetRecommendations({
        offset: 20,
        seed_genres: genres || "",
      });

      setTracks(tracks);
      setSeeds(seeds);
      setLoading(false);
    }

    getInitialData();
  }, [genres]);

  return (
    <div className="w-[25vw]">
      <h1 className="text-xl font-black text-title my-6">Suggested tracks</h1>
      <ListOfTracks tracks={tracks} loading={loading} />
    </div>
  );
}

export default SuggestedTracks;
