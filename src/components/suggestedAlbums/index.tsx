import { useCallback, useState, useMemo } from "react";

import useFetchData from "../../hooks/useFetchData";
import { FetchDataInterface } from "../../types/Pagination";
import { GetNewReleases } from "../../api/Album";
import { Album } from "../../types/Album";
import Loader from "../loader";

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
    () =>
      albums.map((album) => (
        <div
          key={album.id}
          className="w-[17.4rem] m-2 p-3 inline-block relative cursor-pointer border border-[#333333] rounded-xl bg-[#0D0D0D] text-center"
        >
          <img
            className="w-[17rem] h-[17rem] rounded-2xl"
            src={album.images[0].url}
          />
          <span className="font-black text-wrap line-clamp-1 text-paragraph mt-3">
            {album.name}
          </span>
          <span className="leading-3 text-sm text-title line-clamp-1">
            {album.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
      )),
    [albums]
  );

  return (
    <div className="w-[50%]">
      <h1 className="text-xl font-black text-title my-6">
        Suggested album for you
      </h1>
      <div className="w-full h-[60vh] overflow-y-auto overflow-x-hidden">
        {items}
        <div ref={ref}>{loading && <Loader />}</div>
      </div>
    </div>
  );
}

export default SuggestedAlbums;
