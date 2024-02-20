import { useMemo } from "react";

import { Track } from "../../types/Track";
import TrackItem from "./components/trackItem";
import Loader from "../loader";

interface ListOfTracksProps {
  tracks: Array<Track>;
  loading: boolean;
  showPlaybackDate?: boolean;
}

function ListOfTracks(props: ListOfTracksProps) {
  const { tracks, loading, showPlaybackDate = false } = props;

  const trackItems = useMemo(() => {
    if (loading) return <Loader />;

    return tracks.map((track) => (
      <TrackItem
        key={track.id}
        showPlaybackDate={showPlaybackDate}
        {...track}
      />
    ));
  }, [loading, tracks, showPlaybackDate]);

  return <ul className="h-auto">{trackItems}</ul>;
}

export default ListOfTracks;
