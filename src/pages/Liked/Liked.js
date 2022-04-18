import "./Liked.css";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { useVideoState } from "../../contexts/videoStateContext";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";
import { useNavigate } from "react-router-dom";

const Liked = () => {
  const {
    videoState: { likedList },
  } = useVideoState();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="liked-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div>Liked videos ({likedList.length})</div>
            {likedList.length === 0 ? (
              <EmptyListPage text={"No liked videos here"}>
                <button onClick={() => navigate("/")}>Explore</button>
              </EmptyListPage>
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
