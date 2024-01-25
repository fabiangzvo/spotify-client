import FeaturedPlaylists from "../../components/featuredPlaylists";
import RecentlyPlayed from "../../components/recentlyPlayed";
import SuggestedAlbums from "../../components/suggestedAlbums";
import TopTracks from "../../components/topTracks";

function Home() {
  return (
    <div className="h-full w-full">
      <FeaturedPlaylists />
      <div className="flex justify-around">
        <TopTracks />
        <SuggestedAlbums />
        <RecentlyPlayed />
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
