import { useCallback, useState, useMemo } from "react";

import useFetchData from "../../hooks/useFetchData";
import { FetchDataInterface } from "../../types/Pagination";
import { GetFeaturedPLaylists } from "../../api/Playlist";
import { Playlist } from "../../types/Playlist";
import PlaylistItem from "./components/playlistItem";
import Loader from "../loader";

function FeaturedPlaylists() {
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);

  const getFeaturedPlaylist = useCallback(
    async (props: FetchDataInterface) => {
      const { offset = 0, limit = 20 } = props;

      const data = await GetFeaturedPLaylists({ offset, limit });

      const {
        playlists: { items, total },
      } = data;
      const currentOffset: number = offset + limit;

      setPlaylists([...playlists, ...items]);

      return {
        total,
        currentOffset,
        hasMore: total > currentOffset,
      };
    },
    [playlists]
  );

  const { ref, loading, hasMore } = useFetchData({
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
      <h1 className="text-xl font-black text-title my-6 max-lg:text-center">
        Popular playlists
      </h1>
      <div className="w-full overflow-x-scroll overflow-y-hidden h-[14rem] whitespace-nowrap scroll">
        {items}
        <div ref={ref} className="h-full inline-block relative top-[-6rem]">
          {(loading || hasMore) && <Loader />}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPlaylists;
