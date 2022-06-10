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
      <div className="flex-col  gap-1 mt-1">
        <h2>Watch later videos ({watchLaterState.length})</h2>
        {watchLaterState.length === 0 ? (
          <div className="flex-col align-center-flex justify-center-flex gap-1">
            <h2>No watch Later videos</h2>
            <button
              className="curs-point btn-primary"
              onClick={() => navigate("/")}
            >
              Explore
            </button>
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
