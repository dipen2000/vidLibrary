import { createContext, useContext, useReducer, useEffect } from "react";
import { likedReducer } from "../reducers/likedReducer";
import { useAuth } from "./authContext";
import { getLikedList } from "../services/liked/getLikedList";
import { ACTIONS } from "../constants/actions";
import { useNavigate } from "react-router-dom";
import { dislikeVideoService } from "../services/liked/dislikeVideoService";
import { likeVideoService } from "../services/liked/likeVideoService";

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