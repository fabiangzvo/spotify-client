import FeaturedPlaylists from "../../components/featuredPlaylists";
import SuggestedAlbums from "../../components/suggestedAlbums";

function Home() {
  return (
    <main className="h-full w-full">
      <FeaturedPlaylists />
      <SuggestedAlbums />
    </main>
  );
}

export default Home;
