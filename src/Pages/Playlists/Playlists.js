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
      <div className="flex-col bord-3-green">
        <h2>Playlists ({playlistState.length})</h2>
        {playlistState.length === 0 ? (
          <div>
            <p>No playlists here</p>
            <ButtonPrimary onClick={() => navigate("/")}>Explore</ButtonPrimary>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
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
