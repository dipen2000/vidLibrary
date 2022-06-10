import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { playlistReducer } from "../reducers/playlistReducer";
import { getPlaylistService } from "../services/playlist/getPlaylistService";
import { useAuth } from "./authContext";

const playlistContext = createContext();

const usePlaylist = () => useContext(playlistContext);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, []);
  const { isAuth, token } = useAuth();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getPlaylistService(token);

          if (status === 200) {
            playlistDispatch({
              type: ACTIONS.SET_PLAYLIST,
              payload: { data: data.playlists },
            });
          }
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuth]);

  return (
    <playlistContext.Provider value={{ playlistState }}>
      {children}
    </playlistContext.Provider>
  );
};
export { PlaylistProvider, usePlaylist };
