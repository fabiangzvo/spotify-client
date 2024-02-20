import { useMemo } from "react";
import { FaPlayCircle } from "react-icons/fa";
import moment from "moment";

import { Track } from "../../../../types/Track";

interface TrackItemProps extends Track {
  showPlaybackDate?: boolean;
}

function TrackItem(props: TrackItemProps) {
  const {
    id,
    name,
    album,
    artists,
    played_at = "",
    showPlaybackDate = false,
  } = props;

  const secondaryComponent = useMemo(
    () =>
      showPlaybackDate && played_at ? (
        <label className="text-paragraph">
          {moment().diff(played_at, "hours") + " hours ago"}
        </label>
      ) : (
        <FaPlayCircle size="2.5em" />
      ),
    [played_at, showPlaybackDate]
  );

  return (
    <li
      key={id}
      className="p-3 sm:pb-4 border border-card-border rounded-xl bg-card-background cursor-pointer my-4"
    >
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <img
            className="w-14 h-14 rounded-full"
            src={album.images[0].url}
            alt={name}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-title truncate">{name}</p>
          <p className="text-md text-paragraph truncate">
            {artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-title">
          {secondaryComponent}
        </div>
      </div>
    </li>
  );
}

export default TrackItem;
