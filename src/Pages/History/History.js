import "./History.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { useHistory } from "../../context/historyContext";
import { VideoCard } from "../../components/Cards/VideoCard/VideoCard";
import { ButtonPrimary } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
const History = () => {
  const { historyState, removeFromHistory, clearHistory } = useHistory();
  const navigate = useNavigate();
  return (
    <ShoetubeContainer>
      <div className="flex-col bord-3-green">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <h2>Videos in history ({historyState.length})</h2>
          <ButtonPrimary onClick={() => clearHistory()}>
            Clear History
          </ButtonPrimary>
        </div>
        {historyState.length === 0 ? (
          <div>
            <p>No videos history</p>
            <ButtonPrimary onClick={() => navigate("/")}>Explore</ButtonPrimary>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
            {historyState.map((video) => {
              return (
                <div key={video._id} className="flex-col">
                  <VideoCard key={video._id} video={video} />
                  <ButtonPrimary onClick={() => removeFromHistory(video._id)}>
                    Remove from History
                  </ButtonPrimary>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ShoetubeContainer>
  );
};

export { History };
