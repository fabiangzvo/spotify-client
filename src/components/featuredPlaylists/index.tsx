import { useCallback, useState, useMemo } from "react";

import useFetchData from "../../hooks/useFetchData";
import { FetchDataInterface } from "../../types/Pagination";
import { GetFeaturedPLaylists } from "../../api/Playlist";
import { Playlist } from "../../types/Playlist";
import PlaylistItem from "../playlistItem";
import Loader from "../loader";

function FeaturedPlaylists() {
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);
  const [title, setTitle] = useState("");

  const getFeaturedPlaylist = useCallback(
    async (props: FetchDataInterface) => {
      const { offset = 0, limit = 20 } = props;

      const data = await GetFeaturedPLaylists({ offset, limit });

      setPlaylists([...playlists, ...data.playlists.items]);
      setTitle(data.message);

      return {
        total: data.playlists.total,
        currentOffset: offset + limit,
      };
    },
    [playlists]
  );

  const { ref, loading } = useFetchData({
    fetchData: getFeaturedPlaylist,
  });

  const items = useMemo(
    () =>
      playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} {...playlist} />
      )),
    [playlists]
  );

  return (
    <div>
      <h1 className="text-xl font-black text-title my-6">{title}</h1>
      <div className="w-full overflow-x-scroll overflow-y-hidden h-[17rem] whitespace-nowrap">
        {items}
      </div>
      <div ref={ref}>{loading && <Loader />}</div>
    </div>
  );
}

export default FeaturedPlaylists;
