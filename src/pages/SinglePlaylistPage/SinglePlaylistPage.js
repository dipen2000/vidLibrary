import "./SinglePlaylistPage.css";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { useVideoState } from "../../contexts/videoStateContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { PlaylistPageVideoCard } from "../../components/PlaylistPageVideoCard/PlaylistPageVideoCard";

const SinglePlaylistPage = () => {
  const { playlistTitle } = useParams();
  const {
    videoState: { playLists },
  } = useVideoState();

  if (playLists.length === 0) {
    return <Navigate to="/videos" />;
  }

  const playList = playLists.find(
    (playlist) => playlist.title === playlistTitle
  );

  const { videos, title, _id } = playList;
  if (videos.length === 0)
    return (
      <>
        <Navbar />
        <div className="single-playlist-page-container">
          <div className="grid-container">
            <AsideNavbar />
            <section className="flex-col">
              <p>Empty playlist</p>
            </section>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="single-playlist-page-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <p>
              {title} ({videos.length})
            </p>
            <div className="video-listing-container">
              {videos.map((video) => {
                return (
                  <PlaylistPageVideoCard
                    key={video._id}
                    video={video}
                    playlistId={_id}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export { SinglePlaylistPage };
