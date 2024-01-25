import { useMemo } from "react";

import { Track } from "../../types/Track";
import TrackItem from "./components/trackItem";
import Loader from "../loader";

interface ListOfTracksProps {
  tracks: Array<Track>;
  loading: boolean;
}

function ListOfTracks(props: ListOfTracksProps) {
  const { tracks, loading } = props;

  const trackItems = useMemo(() => {
    if (loading) return <Loader />;

    return tracks.map((track) => <TrackItem key={track.id} {...track} />);
  }, [tracks, loading]);

  return <ul className="h-auto">{trackItems}</ul>;
}

export default ListOfTracks;
