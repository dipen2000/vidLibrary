import "./WatchLater.css";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";

const WatchLater = () => {
  const {
    videoState: { watchLater },
    videoStateDispatch,
  } = useVideoState();

  return (
    <>
      <Navbar />
      <div className="watch-later-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div>Watch later videos ({watchLater.length})</div>
            {watchLater.length === 0 ? (
              <EmptyListPage text={"No watch later videos here"} />
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
