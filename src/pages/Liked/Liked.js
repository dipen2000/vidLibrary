import "./Liked.css";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";

const Liked = () => {
  const {
    videoState: { likedList },
  } = useVideoState();

  return (
    <>
      <Navbar />
      <div className="liked-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div>Liked videos ({likedList.length})</div>
            {likedList.length === 0 ? (
              <EmptyListPage text={"No videos here"} />
            ) : (
              <div className="video-listing-container">
                {likedList.map((video) => {
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

export { Liked };
