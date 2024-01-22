import { useCallback, useState, useMemo } from "react";

import useFetchData from "../../hooks/useFetchData";
import { FetchDataInterface } from "../../types/Pagination";
import { GetNewReleases } from "../../api/Album";
import { Album } from "../../types/Album";
import Loader from "../loader";
import AlbumCard from "../albumCard";

function SuggestedAlbums() {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  const getFeaturedPlaylist = useCallback(
    async (props: FetchDataInterface) => {
      const { offset = 0, limit = 20 } = props;

      const {
        albums: { items, total },
      } = await GetNewReleases({ offset, limit });

      const currentOffset: number = offset + limit;
      setAlbums([...albums, ...items]);

      return {
        total,
        currentOffset,
        hasMore: total > currentOffset,
      };
    },
    [albums]
  );

  const { ref, loading } = useFetchData({
    fetchData: getFeaturedPlaylist,
    limit: 10,
  });

  const items = useMemo(
    () => albums.map((album) => <AlbumCard {...album} />),
    [albums]
  );

  return (
    <div className="w-[53%] max-sm:w-[90vw]">
      <h1 className="text-xl font-black text-title my-6">
        Suggested album for you
      </h1>
      <div className="w-full h-[60vh] overflow-y-auto overflow-x-hidden grid grid-cols-auto-fill gap-1 items-stretch">
        {items}
        <div ref={ref}>{loading && <Loader />}</div>
      </div>
    </div>
  );
}

export default SuggestedAlbums;
