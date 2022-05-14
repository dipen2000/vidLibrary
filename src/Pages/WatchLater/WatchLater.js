import "./WatchLater.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { useWatchLater } from "../../context/watchLaterContext";
import { VideoCard } from "../../components/Cards/VideoCard/VideoCard";
import { ButtonPrimary } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
const WatchLater = () => {
  const { watchLaterState } = useWatchLater();
  const navigate = useNavigate();

  return (
    <ShoetubeContainer>
      <div className="flex-col bord-3-green">
        <h2>Watch later videos ({watchLaterState.length})</h2>
        {watchLaterState.length === 0 ? (
          <div>
            <p>No watch Later videos</p>
            <ButtonPrimary onClick={() => navigate("/")}>Explore</ButtonPrimary>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
            {watchLaterState.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        )}
      </div>
    </ShoetubeContainer>
  );
};

export { WatchLater };
