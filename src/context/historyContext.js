import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { historyReducer } from "../reducers/historyReducer";
import { getHistoryList } from "../services/history/getHistoryList";
import { useNavigate } from "react-router-dom";
import { addToHistoryService } from "../services/history/addToHistoryService";
import { removeFromHistoryService } from "../services/history/removeFromHistoryService";
import { clearHistoryService } from "../services/history/clearHistoryService";
import { useAuth } from "./authContext";

const historyContext = createContext();

const useHistory = () => useContext(historyContext);

const HistoryProvider = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth, token } = useAuth();
  const [historyState, historyDispatch] = useReducer(historyReducer, []);

  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await getHistoryList(token);

        if (status === 200) {
          historyDispatch({
            type: ACTIONS.SET_HISTORY_LIST,
            payload: { data: data.history },
          });
        }
      })();
    } catch (e) {
      console.log(e);
    }
  }, [isAuth]);

  const addToHistory = async (video, videoInHistoryList) => {
    if (isAuth) {
      if (!videoInHistoryList) {
        try {
          const { data, status } = await addToHistoryService(video, token);

          if (status === 201) {
            historyDispatch({
              type: ACTIONS.SET_HISTORY_LIST,
              payload: { data: data.history },
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

  const removeFromHistory = async (videoId) => {
    if (isAuth) {
      try {
        const { data, status } = await removeFromHistoryService(videoId, token);

        if (status === 200) {
          historyDispatch({
            type: ACTIONS.SET_HISTORY_LIST,
            payload: { data: data.history },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const clearHistory = async () => {
    if (isAuth) {
      try {
        const { data, status } = await clearHistoryService(token);

        if (status === 200) {
          console.log("clear history");
          historyDispatch({
            type: ACTIONS.SET_HISTORY_LIST,
            payload: { data: data.history },
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
    <historyContext.Provider
      value={{ historyState, addToHistory, removeFromHistory, clearHistory }}
    >
      {children}
    </historyContext.Provider>
  );
};

export { HistoryProvider, useHistory };
