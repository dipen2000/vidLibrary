import { useReducer, createContext, useContext } from "react";
import { filterReducer } from "./filterReducer";

const VideoFilterContext = createContext();

const useVideoFilter = () => useContext(VideoFilterContext);

const VideoFilterProvider = ({ children }) => {
  const initialFilterState = {
    showCategories: [],
    searchKeyword: "",
  };

  const [filterState, filterStateDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <VideoFilterContext.Provider value={{ filterState, filterStateDispatch }}>
      {children}
    </VideoFilterContext.Provider>
  );
};

export { VideoFilterProvider, useVideoFilter };
