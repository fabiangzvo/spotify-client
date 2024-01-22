import FeaturedPlaylists from "../../components/featuredPlaylists";
import SuggestedAlbums from "../../components/suggestedAlbums";
import SuggestedTracks from "../../components/suggestedTracks";

function Home() {
  return (
    <main className="h-full w-full">
      <FeaturedPlaylists />
      <div className="flex">
        <SuggestedTracks />
        <SuggestedAlbums />
      </div>
    </main>
  );
}

export default Home;
