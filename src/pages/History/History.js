import "./History.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { clearHistory } from "../../services/History/clearHistory";
import { removeFromHistory } from "../../services/History/removeFromHistory";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useNavigate } from "react-router-dom";
const History = () => {
  const {
    videoState: { history },
    videoStateDispatch,
  } = useVideoState();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="history-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div className="flex-row justify-space-between-flex">
              <h2 className="page-title-text">
                Videos in history ({history.length})
              </h2>
              <button
                className="btn btn-primary-solid shoetube-btn-main clear-history"
                onClick={() => clearHistory({ videoStateDispatch })}
              >
                Clear all history
              </button>
            </div>

            {history.length === 0 ? (
              <EmptyListPage text={"No videos here in history."}>
                <button
                  className="btn btn-primary-solid shoetube-btn-main"
                  onClick={() => navigate("/")}
                >
                  Explore
                </button>
              </EmptyListPage>
            ) : (
              <div className="video-listing-container">
                {history.map((video) => {
                  return (
                    <>
                      <div className="flex-col">
                        <VideoCard key={video._id} video={video} />
                        <button
                          className=" btn-primary-solid shoetube-btn-main curs-point"
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
