import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchCategories } from "../services/data/fetchCategories";
import { fetchVideoList } from "../services/data/fetchVideoList";
const VideoStateContext = createContext();

const useVideoState = () => useContext(VideoStateContext);

const VideoStateProvider = ({ children }) => {
  const initialVideoState = {
    videoList: [],
    playLists: [],
    likedList: [],
    history: [],
    watchLater: [],
    categories: [],
  };

  const videoStateReducer = (state, { type, payload }) => {
    switch (type) {
      case "GET_VIDEOS":
        return { ...state, videoList: payload };
      case "GET_CATEGORIES":
        return { ...state, categories: payload };
      case "GET_PLAYLISTS_AND_LIKEDLIST_AND_HISTORY_AND_WATCHLATER":
        return {
          ...state,
          playLists: [...state.playLists, ...payload.playlists],
          likedList: payload.likes,
          history: payload.history,
          watchLater: payload.watchlater,
        };

      case "HANDLE_LIKES":
        return { ...state, likedList: [...payload] };
      case "HANDLE_HISTORY":
        return { ...state, history: [...payload] };
      case "HANDLE_WATCHLATER":
        return { ...state, watchLater: [...payload] };
      case "HANDLE_PLAYLISTS":
        return { ...state, playLists: [...payload] };
      case "HANDLE_PLAYLIST":
        return {
          ...state,
          playLists: state.playLists.map((playlist) =>
            playlist._id === payload._id ? payload : playlist
          ),
        };
      default:
        return { ...state };
    }
  };

  const [videoState, videoStateDispatch] = useReducer(
    videoStateReducer,
    initialVideoState
  );

  useEffect(() => {
    fetchVideoList({ videoStateDispatch });
    fetchCategories({ videoStateDispatch });
  }, []);

  return (
    <VideoStateContext.Provider
      value={{ videoState, videoStateDispatch, initialVideoState }}
    >
      {children}
    </VideoStateContext.Provider>
  );
};

export { VideoStateProvider, useVideoState };
