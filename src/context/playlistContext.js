import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { playlistReducer } from "../reducers/playlistReducer";
import { getPlaylistService } from "../services/playlist/getPlaylistService";
import { createPlaylistService } from "../services/playlist/createPlaylistService";
import { removePlaylistService } from "../services/playlist/removePlaylistService";
import { addToPlaylistService } from "../services/playlist/addToPlaylistService";
import { removeFromPlaylistService } from "../services/playlist/removeFromPlaylistService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

const playlistContext = createContext();

const usePlaylist = () => useContext(playlistContext);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, []);
  const navigate = useNavigate();
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

  const addToPlaylist = async (video, playlistId) => {
    if (isAuth) {
      try {
        const { data, status } = await addToPlaylistService(
          token,
          video,
          playlistId
        );

        if (status === 201) {
          playlistDispatch({
            type: ACTIONS.ADD_TO_PLAYLIST,
            payload: { data: data.playlist },
          });
          toast("Video added to playlist.", {
            icon: "✅",
            style: {
              backgroundColor: "var(--bg-color)",
              color: "white",
              borderRadius: "15px",
              boxShadow:
                "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromPlaylist = async (video, playlistId) => {
    if (isAuth) {
      try {
        const { data, status } = await removeFromPlaylistService(
          token,
          video,
          playlistId
        );

        if (status === 200) {
          playlistDispatch({
            type: ACTIONS.REMOVE_FROM_PLAYLIST,
            payload: { data: data.playlist },
          });
          toast("Video removed from playlist.", {
            icon: "✅",
            style: {
              backgroundColor: "var(--bg-color)",
              color: "white",
              borderRadius: "15px",
              boxShadow:
                "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const createPlaylist = async (formInput, video) => {
    if (isAuth) {
      try {
        const { data, status } = await createPlaylistService(token, formInput);

        if (status === 201) {
          playlistDispatch({
            type: ACTIONS.SET_PLAYLIST,
            payload: { data: data.playlists },
          });
        }

        if (video) {
          const playlistId = data.playlists[data.playlists.length - 1]._id;

          addToPlaylist(video, playlistId);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const removePlaylist = async (playlistId) => {
    if (isAuth) {
      try {
        const { data, status } = await removePlaylistService(token, playlistId);

        if (status === 200) {
          playlistDispatch({
            type: ACTIONS.SET_PLAYLIST,
            payload: { data: data.playlists },
          });
          toast("Playlist removed.", {
            icon: "✅",
            style: {
              backgroundColor: "var(--bg-color)",
              color: "white",
              borderRadius: "15px",
              boxShadow:
                "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <playlistContext.Provider
      value={{
        playlistState,
        createPlaylist,
        removePlaylist,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </playlistContext.Provider>
  );
};
export { PlaylistProvider, usePlaylist };
