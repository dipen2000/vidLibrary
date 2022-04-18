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
            <h2 className="page-title-text">
              Liked videos ({likedList.length})
            </h2>
            {likedList.length === 0 ? (
              <EmptyListPage text={"No liked videos here"}>
                <button
                  className="btn btn-primary-solid shoetube-btn-main"
                  onClick={() => navigate("/")}
                >
                  Explore
                </button>
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
