import "./Liked.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { useLiked } from "../../context/likeContext";
import { VideoCard } from "../../components/Cards/VideoCard/VideoCard";
import { ButtonPrimary } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
const Liked = () => {
  const { likedState } = useLiked();
  const navigate = useNavigate();
  return (
    <ShoetubeContainer>
      <div className="flex-col  gap-1 mt-1">
        <h2>Liked videos ({likedState.length})</h2>
        {likedState.length === 0 ? (
          <div className="flex-col align-center-flex justify-center-flex gap-1 no-liked-items-container">
            <h2>No liked videos</h2>
            <button
              className="curs-point btn-primary explore-btn"
              onClick={() => navigate("/")}
            >
              Explore
            </button>
          </div>
        ) : (
          <div className="video-listing-grid-container">
            {likedState.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        )}
      </div>
    </ShoetubeContainer>
  );
};

export { Liked };
