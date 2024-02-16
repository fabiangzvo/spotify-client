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
    () => albums.map((album) => <AlbumCard key={album.id} {...album} />),
    [albums]
  );

  return (
    <div className="w-[40vw] max-lg:w-full">
      <h1 className="text-xl font-black text-title my-6 max-lg:text-center">
        Suggested album for you
      </h1>
      <div className="w-full h-[43vh] overflow-y-auto overflow-x-hidden grid gap-1 items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fill scroll">
        {items}
        <div ref={ref}>{loading && <Loader />}</div>
      </div>
    </div>
  );
}

export default SuggestedAlbums;
