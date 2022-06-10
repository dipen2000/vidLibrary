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
      <div className="flex-col bord-3-green">
        <h2>Liked videos ({likedState.length})</h2>
        {likedState.length === 0 ? (
          <div>
            <p>No liked videos</p>
            <ButtonPrimary onClick={() => navigate("/")}>Explore</ButtonPrimary>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
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
