import "./VideosSection.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideoFilter } from "../../contexts/videoFilterContext/videoFilterContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { getFilteredVideosList } from "../../utils";
// import { ChipsSection } from "../ChipsSection/ChipsSection";
// import { VideoListing } from "../VideoListing/VideoListing";
import { VideoCard } from "../VideoCard/VideoCard";
const VideosSection = () => {
  const { categoryName } = useParams();
  useEffect(() => {
    if (categoryName) {
      filterStateDispatch({
        type: "ADD_CATEGORY",
        payload: categoryName,
      });
    } else {
      filterStateDispatch({ type: "ALL_CATEGORIES" });
    }
  }, []);

  const {
    videoState: { videoList, categories },
  } = useVideoState();

  const { filterState, filterStateDispatch } = useVideoFilter();
  const { showCategories } = filterState;

  const filteredVideosList = getFilteredVideosList([...videoList], filterState);
  console.log(videoList);
  if (videoList.length === 0) return <div>Loading...</div>;
  return (
    <main className="video-section-container flex-col">
      <div className="chips-container flex-row chips-position">
        <button
          className={
            showCategories.length === 0
              ? "btn btn-primary-outline btn-rounded shoe-tube-chips active"
              : "btn btn-primary-outline btn-rounded shoe-tube-chips"
          }
          onClick={() => filterStateDispatch({ type: "ALL_CATEGORIES" })}
        >
          All
        </button>
        {categories.map((category) => {
          const { categoryName, _id } = category;
          return (
            <button
              key={_id}
              className={
                showCategories.includes(categoryName)
                  ? "btn btn-primary-outline btn-rounded shoe-tube-chips active"
                  : "btn btn-primary-outline btn-rounded  shoe-tube-chips"
              }
              onClick={() => {
                filterStateDispatch({
                  type: "ADD_CATEGORY",
                  payload: categoryName,
                });
              }}
            >
              {categoryName}
            </button>
          );
        })}
      </div>
      <div className="video-listing-container">
        {filteredVideosList.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </main>
  );
};

export { VideosSection };
