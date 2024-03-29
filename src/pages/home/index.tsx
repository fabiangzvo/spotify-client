import FeaturedPlaylists from "../../components/featuredPlaylists";
import RecentlyPlayed from "../../components/recentlyPlayed";
import SuggestedAlbums from "../../components/suggestedAlbums";
import TopTracks from "../../components/topTracks";

function Home() {
  return (
    <div className="max-lg:w-screen p-3 pt-0">
      <FeaturedPlaylists />
      <div className="w-full flex justify-around max-lg:flex-col">
        <RecentlyPlayed />
        <SuggestedAlbums />
        <TopTracks />
      </div>
    </div>
  );
}

export default Home;

/**
  const [genres, setGenres] = useState<Array<string>>([]);

  useEffect(() => {
    async function getInitialData() {
      const { genres } = await GetGenres();

      setGenres(
        genres.length ? genres : ["pop", "rock", "hip-hop", "latin", "edm"]
      );
    }

    getInitialData();
  }, []);
 */
