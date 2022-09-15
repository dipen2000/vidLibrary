import { createContext, useContext, useReducer, useEffect } from "react";
import { likedReducer } from "../reducers/likedReducer";
import { useAuth } from "./authContext";
import { getLikedList } from "../services/liked/getLikedList";
import { ACTIONS } from "../constants/actions";
import { useNavigate } from "react-router-dom";
import { dislikeVideoService } from "../services/liked/dislikeVideoService";
import { likeVideoService } from "../services/liked/likeVideoService";
import toast from "react-hot-toast";

const likedContext = createContext();

const useLiked = () => useContext(likedContext);

const LikedProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const [likedState, likedDispatch] = useReducer(likedReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getLikedList(token);

          if (status === 200) {
            likedDispatch({
              type: ACTIONS.SET_LIKED_LIST,
              payload: { data: data.likes },
            });
          }
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuth]);

  const toggleLike = async (video, videoInLikedList) => {
    if (isAuth) {
      if (videoInLikedList) {
        try {
          const { data, status } = await dislikeVideoService(video._id, token);

          if (status === 200) {
            likedDispatch({
              type: ACTIONS.SET_LIKED_LIST,
              payload: { data: data.likes },
            });
            toast("Video removed from liked.", {
              icon: "✅",
              style: {
                backgroundColor: "var(--bg-color)",
                color: "white",
                borderRadius: "15px",
                boxShadow:
                  "0 10px 15px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const { data, status } = await likeVideoService(video, token);

          if (status === 201) {
            likedDispatch({
              type: ACTIONS.SET_LIKED_LIST,
              payload: { data: data.likes },
            });
            toast("Video added to liked.", {
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
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <likedContext.Provider value={{ likedState, toggleLike }}>
      {children}
    </likedContext.Provider>
  );
};

export { LikedProvider, useLiked };
