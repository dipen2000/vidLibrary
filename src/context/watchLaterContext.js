import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { watchLaterReducer } from "../reducers/watchLaterReducer";
import { getWatchLaterList } from "../services/watchLater/getWatchLaterList";
import { removeFromWatchLaterService } from "../services/watchLater/removeFromWatchLaterService";
import { moveToWatchLaterService } from "../services/watchLater/moveToWatchLaterService";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
const watchLaterContext = createContext();

const useWatchLater = () => useContext(watchLaterContext);
const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    []
  );
  const { isAuth, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getWatchLaterList(token);

          if (status === 200) {
            watchLaterDispatch({
              type: ACTIONS.SET_WATCH_LATER_LIST,
              payload: { data: data.watchlater },
            });
          }
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuth]);

  const toggleWatchLater = async (video, videoInWatchLaterList) => {
    if (isAuth) {
      if (videoInWatchLaterList) {
        try {
          const { data, status } = await removeFromWatchLaterService(
            video._id,
            token
          );

          if (status === 200) {
            watchLaterDispatch({
              type: ACTIONS.SET_WATCH_LATER_LIST,
              payload: { data: data.watchlater },
            });
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const { data, status } = await moveToWatchLaterService(video, token);

          if (status === 201) {
            watchLaterDispatch({
              type: ACTIONS.SET_WATCH_LATER_LIST,
              payload: { data: data.watchlater },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <watchLaterContext.Provider value={{ watchLaterState, toggleWatchLater }}>
      {children}
    </watchLaterContext.Provider>
  );
};

export { WatchLaterProvider, useWatchLater };
