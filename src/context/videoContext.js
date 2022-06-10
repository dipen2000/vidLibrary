import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { videoReducer } from "../reducers/videoReducer";
import { getVideos } from "../services/videos/getVideos";

const videoContext = createContext();

const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, []);

  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await getVideos();
        if (status === 200) {
          videoDispatch({
            type: ACTIONS.GET_VIDEOS,
            payload: { data: data.videos },
          });
        }
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <videoContext.Provider value={{ videoState }}>
      {children}
    </videoContext.Provider>
  );
};

export { VideoProvider, useVideos };
