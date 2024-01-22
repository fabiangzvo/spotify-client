import { Album } from "../../types/Album";

function AlbumCard(props: Album) {
  const { id, images, artists, name } = props;

  return (
    <div
      key={id}
      className="m-2 p-3 inline-block relative cursor-pointer border border-[#333333] rounded-xl bg-[#0D0D0D] text-center"
    >
      <img
        className="w-full h-[13rem] max-sm:h-[16rem] rounded-2xl"
        src={images[0].url}
      />
      <span className="font-black text-wrap line-clamp-1 text-paragraph mt-3">
        {name}
      </span>
      <span className="leading-3 text-sm text-title line-clamp-1">
        {artists.map((artist) => artist.name).join(", ")}
      </span>
    </div>
  );
}

export default AlbumCard;
