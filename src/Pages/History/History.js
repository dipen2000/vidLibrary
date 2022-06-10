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
      <div className="flex-col gap-1 mt-1">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <h2>Videos in history ({historyState.length})</h2>
          <button
            className="curs-point btn-primary clear-history-btn"
            onClick={() => clearHistory()}
          >
            Clear History
          </button>
        </div>
        {historyState.length === 0 ? (
          <div className="flex-col align-center-flex justify-center-flex gap-1">
            <h2>No videos history</h2>
            <button
              className="curs-point btn-primary"
              onClick={() => navigate("/")}
            >
              Explore
            </button>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
            {historyState.map((video) => {
              return (
                <div key={video._id} className="flex-col">
                  <VideoCard key={video._id} video={video} />
                  <button
                    className="item-remove-btn curs-point"
                    onClick={() => removeFromHistory(video._id)}
                  >
                    Remove from History
                  </button>
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
