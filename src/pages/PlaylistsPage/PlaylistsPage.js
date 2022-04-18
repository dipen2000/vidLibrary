import "./PlaylistsPage.css";
import { usePlaylistModal } from "../../contexts/PlaylistModalContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { EmptyListPage } from "../../components/EmptyListPage/EmptyListPage";
import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { useNavigate } from "react-router-dom";

const PlaylistsPage = () => {
  const {
    videoState: { playLists },
  } = useVideoState();

  const { setDisplayModal } = usePlaylistModal();

  const openPlaylistModal = () => {
    setDisplayModal(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="playlist-page-container">
        <div className="grid-container">
          <AsideNavbar />
          <section className="flex-col">
            <div className="flex-row justify-space-between-flex">
              <div>Playlists ({playLists.length})</div>
            </div>
            {playLists.length === 0 ? (
              <EmptyListPage text={"no playlists here"}>
                <button onClick={() => navigate("/")}>Explore</button>
              </EmptyListPage>
            ) : (
              <div className="video-listing-container">
                {playLists.map((playlist) => {
                  return (
                    <PlaylistCard key={playlist._id} playlist={playlist} />
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

export { PlaylistsPage };
