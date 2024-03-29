import { useEffect, useState, useMemo } from "react";

import { PlayHistory } from "../../types/Player";
import { GetRecentlyPlayed } from "../../api/Player";
import ListOfTracks from "../listOfTracks";

function RecentlyPlayed() {
  const [loading, setLoading] = useState(true);
  const [playHistoryList, setPlayHistoryList] = useState<Array<PlayHistory>>(
    []
  );
  useEffect(() => {
    async function getInitialData() {
      setLoading(true);
      const { items } = await GetRecentlyPlayed({ limit: 20 });

      setPlayHistoryList(items);
      setLoading(false);
    }

    getInitialData();
  }, []);

  const tracks = useMemo(
    () =>
      playHistoryList.map((playHistory) => ({
        ...playHistory.track,
        played_at: playHistory.played_at,
      })),
    [playHistoryList]
  );

  return (
    <div className="w-[25vw] relative max-lg:w-full">
      <h1 className="text-xl font-black text-title my-6 max-lg:text-center">
        Recently heard
      </h1>
      <div className="h-[43vh] overflow-y-auto scroll lg:h-[48vh]">
        <ListOfTracks tracks={tracks} loading={loading} showPlaybackDate />
      </div>
    </div>
  );
}

export default RecentlyPlayed;
