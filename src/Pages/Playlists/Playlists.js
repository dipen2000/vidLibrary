import "./Playlists.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { usePlaylist } from "../../context/playlistContext";
import { PlaylistCard } from "../../components/Cards/PlaylistCard/PlaylistCard";
import { ButtonPrimary } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
const Playlists = () => {
  const { playlistState } = usePlaylist();
  const navigate = useNavigate();
  return (
    <ShoetubeContainer>
      <div className="flex-col gap-1 mt-1">
        <h2>Playlists ({playlistState.length})</h2>
        {playlistState.length === 0 ? (
          <div className="flex-col align-center-flex justify-center-flex gap-1 no-playlists-item-container">
            <h2>No playlists here</h2>
            <button
              className="curs-point btn-primary explore-btn"
              onClick={() => navigate("/")}
            >
              Explore
            </button>
          </div>
        ) : (
          <div className="video-listing-grid-container">
            {playlistState.map((playlist) => {
              return <PlaylistCard key={playlist._id} playlist={playlist} />;
            })}
          </div>
        )}
      </div>
    </ShoetubeContainer>
  );
};

export { Playlists };
