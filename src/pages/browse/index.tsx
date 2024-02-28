import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

import { search } from "../../api/Search";
import {
  searchReducer,
  INITIAL_STATE,
  SearchActionKind,
  SearchPropertyKind,
} from "./constants";

function Browse() {
  const [results, setResults] = useReducer(searchReducer, INITIAL_STATE);
  const [_isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function executeSearch() {
      setIsLoading(true);
      const q = searchParams.get("search") || "";
      const response = await search({ q });

      setResults({
        payload: response.albums,
        property: SearchPropertyKind.ALBUM,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.artists,
        property: SearchPropertyKind.ARTIST,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.audiobooks,
        property: SearchPropertyKind.AUDIOBOOK,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.episodes,
        property: SearchPropertyKind.EPISODE,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.playlists,
        property: SearchPropertyKind.PLAYLIST,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.shows,
        property: SearchPropertyKind.SHOW,
        type: SearchActionKind.SET,
      });
      setResults({
        payload: response.tracks,
        property: SearchPropertyKind.TRACK,
        type: SearchActionKind.SET,
      });
      setIsLoading(false);
    }

    executeSearch();
  }, [searchParams]);

  return (
    <div className="pl-5 h-full w-[91.3vw] flex flex-col">
      <label id="result-search" className="mt-5 text-title text-xl font-bold">
        Results for search : "{searchParams.get("search")}"
      </label>
      <div className="flex flex-col min-h-screen my-5">
        <div className="mt-5 h-[26vh] overflow-hidden">
          <label className="text-title text-xl font-bold">Albums</label>
          <div className="relative left-0 w-[95vw] h-[17vh] mr-10">
            <div
              id="horizontal-child"
              className="bottom-[95vh] lg:bottom-[76vh] w-[100vh] h-[95vw] absolute overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll"
            >
              <div id="slide">
                {results.albums.items.map(
                  ({ name, total_tracks, images: [{ url, width }] }) => (
                    <div className="m-2 inline-block relative cursor-pointer">
                      <img
                        className="w-[12rem] h-[12rem] rounded-2xl"
                        src={url}
                        width={width}
                      />
                      <span className="absolute bottom-0 w-full h-20 flex items-center bg-gradient-to-t from-background to-transparent px-3 py-1">
                        <div className="w-[80%] flex flex-col">
                          <span className="font-black text-wrap text-lg text-title line-clamp-2">
                            {name}
                          </span>
                          <span className="leading-3 text-md text-paragraph">
                            {total_tracks} tracks
                          </span>
                        </div>
                        <FaPlayCircle size="3em" className="text-title" />
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 h-[30.4vh] overflow-hidden">
          <label className="text-title text-xl font-bold">Artists</label>
          <div className="relative left-0 w-[95vw] h-[17vh]">
            <div
              id="horizontal-child"
              className="bottom-[90vh] lg:bottom-[73vh] w-[100vh] h-[95vw] absolute overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll"
            >
              <div id="slide">
                {results.artists.items.map(
                  ({ name, images: [{ url, width }] }) => (
                    <div className="w-[12rem] mt-3 m-2 inline-block relative cursor-pointer">
                      <img
                        className="h-[12rem] rounded-2xl"
                        src={url}
                        width={width}
                      />
                      <span className="flex items-center bg-gradient-to-t from-background to-transparent">
                        <div className="w-full flex flex-col items-center">
                          <span className="mt-1 font-semibold text-wrap text-md text-paragraph text-center">
                            {name}
                          </span>
                        </div>
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 h-[26vh] overflow-hidden">
          <label className="text-title text-xl font-bold">Tracks</label>
          <div className="relative left-0 w-[95vw] h-[17vh]">
            <div
              id="horizontal-child"
              className="bottom-[95vh] lg:bottom-[76vh] w-[100vh] h-[95vw] absolute overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll"
            >
              <div id="slide">
                {results.tracks.items.map(
                  ({
                    name,
                    duration_ms,
                    album: {
                      images: [{ url, width }],
                    },
                  }) => (
                    <div className="m-2 inline-block relative cursor-pointer">
                      <img
                        className="w-[12rem] h-[12rem] rounded-2xl"
                        src={url}
                        width={width}
                      />
                      <span className="absolute bottom-0 w-full h-20 flex items-center bg-gradient-to-t from-background to-transparent px-3 py-1">
                        <div className="w-[80%] flex flex-col">
                          <span className="font-black text-wrap text-lg text-title">
                            {name}
                          </span>
                          <span className="leading-3 text-md text-paragraph">
                            {duration_ms} MS
                          </span>
                        </div>
                        <FaPlayCircle size="3em" className="text-title" />
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 h-[26vh] overflow-hidden">
          <label className="text-title text-xl font-bold">Playlist</label>
          <div className="relative left-0 w-[95vw] h-[17vh]">
            <div
              id="horizontal-child"
              className="bottom-[95vh] lg:bottom-[76vh] w-[100vh] h-[95vw] absolute overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll"
            >
              <div id="slide">
                {results.playlists.items.map(
                  ({ name, images: [image], tracks }) => (
                    <div className="m-2 inline-block relative cursor-pointer">
                      <img
                        className="w-[12rem] h-[12rem] rounded-2xl"
                        src={image?.url}
                        width={image?.width}
                      />
                      <span className="absolute bottom-0 w-full h-20 flex items-center bg-gradient-to-t from-background to-transparent px-3 py-1">
                        <div className="w-[80%] flex flex-col">
                          <span className="font-black text-wrap text-lg text-title">
                            {name}
                          </span>
                          <span className="leading-3 text-md text-paragraph">
                            {tracks.total} Tracks
                          </span>
                        </div>
                        <FaPlayCircle size="3em" className="text-title" />
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
