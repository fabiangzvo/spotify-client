import { Album } from "../../types/Album";

function AlbumCard(props: Album) {
  const { id, images, artists, name } = props;

  return (
    <div
      key={id}
      className="m-2 p-3 inline-block relative cursor-pointer border border-card-border rounded-xl bg-card-background text-center"
    >
      <img
        className="w-full h-[13rem] max-sm:h-[16rem] rounded-2xl"
        src={images[0].url}
      />
      <span className="font-black text-wrap line-clamp-1 text-title mt-3 text-lg">
        {name}
      </span>
      <span className="leading-3 text-md text-paragraph line-clamp-1">
        {artists.map((artist) => artist.name).join(", ")}
      </span>
    </div>
  );
}

export default AlbumCard;
