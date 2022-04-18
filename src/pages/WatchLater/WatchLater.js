import "./WatchLater.css";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";
import { useNavigate } from "react-router-dom";

const WatchLater = () => {
  const {
    videoState: { watchLater },
    videoStateDispatch,
  } = useVideoState();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="watch-later-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <h2 className="page-title-text">
              Watch later videos ({watchLater.length})
            </h2>
            {watchLater.length === 0 ? (
              <EmptyListPage text={"No watch later videos here"}>
                <button
                  className="btn btn-primary-solid shoetube-btn-main"
                  onClick={() => navigate("/")}
                >
                  Explore
                </button>
              </EmptyListPage>
            ) : (
              <div className="video-listing-container">
                {watchLater.map((video) => {
                  return <VideoCard key={video._id} video={video} />;
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export { WatchLater };
