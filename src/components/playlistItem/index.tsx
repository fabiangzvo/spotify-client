import { FaPlayCircle } from "react-icons/fa";

import { Playlist } from "../../types/Playlist";

function PlaylistItem(props: Playlist) {
  const {
    images: [{ url, width }],
    tracks: { total },
    name,
  } = props;

  return (
    <div className="m-2 inline-block relative cursor-pointer">
      <img className="w-[15rem] rounded-2xl" src={url} width={width} />
      <span className="absolute bottom-0 w-full h-20 flex items-center bg-gradient-to-t from-background to-transparent px-3 py-1 text-paragraph">
        <div className="w-[80%] flex flex-col">
          <span className="font-black text-wrap">{name}</span>
          <span className="leading-3 text-sm">{total} tracks</span>
        </div>
        <FaPlayCircle size="3em" />
      </span>
    </div>
  );
}

export default PlaylistItem;
