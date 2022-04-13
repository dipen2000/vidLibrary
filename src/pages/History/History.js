import "./History.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { clearHistory } from "../../services/History/clearHistory";
import { removeFromHistory } from "../../services/History/removeFromHistory";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";
import { VideoCard } from "../../components/VideoCard/VideoCard";
const History = () => {
  const {
    videoState: { history },
    videoStateDispatch,
  } = useVideoState();
  return (
    <>
      <Navbar />
      <div className="history-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div>Videos in history ({history.length})</div>
            <button onClick={() => clearHistory({ videoStateDispatch })}>
              Clear all history
            </button>
            {history.length === 0 ? (
              <EmptyListPage text={"No videos here in history."} />
            ) : (
              <div className="video-listing-container">
                {history.map((video) => {
                  return (
                    <>
                      <div className="flex-col">
                        <VideoCard key={video._id} video={video} />
                        <button
                          onClick={() => {
                            removeFromHistory({
                              _id: video._id,
                              videoStateDispatch,
                            });
                          }}
                        >
                          remove from history
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export { History };
