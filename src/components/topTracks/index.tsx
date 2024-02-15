import { useEffect, useState, useCallback, MouseEvent } from "react";

import { GetUserTop } from "../../api/User";
import { Track, TimeRange } from "../../types/Track";
import { TIME_RANGE_ITEMS } from "./constants";
import ListOfBadges from "../listOfBadges";
import ListOfTracks from "../listOfTracks";

function TopTracks() {
  const [tracks, setTracks] = useState<Array<Track>>([]);
  const [timeRange, setTimeRange] = useState<TimeRange>("short_term");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      setLoading(true);

      const { items } = await GetUserTop({
        limit: 50,
        type: "tracks",
        time_range: timeRange,
      });

      setTracks(items);
      setLoading(false);
    }

    getInitialData();
  }, [timeRange]);

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setTimeRange(e.currentTarget.value as TimeRange);
  }, []);

  return (
    <div className="w-[25vw] relative max-lg:w-full">
      <h1 className="text-xl font-black text-title my-6">
        What you listen to the most
      </h1>
      <ListOfBadges
        handleClick={handleClick}
        list={TIME_RANGE_ITEMS}
        selectedBadge={timeRange}
      />
      <div className="h-[45vh] overflow-y-auto scroll">
        <ListOfTracks tracks={tracks} loading={loading} />
      </div>
    </div>
  );
}

export default TopTracks;
