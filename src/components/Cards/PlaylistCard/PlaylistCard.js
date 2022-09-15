import "./PlaylistCard.css";
import { usePlaylist } from "../../../context/playlistContext";
import { useNavigate } from "react-router-dom";
const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  const { removePlaylist } = usePlaylist();
  return (
    <div className="playlist-card-container flex-col card-box-shadow-green-vid-lib">
      <div className="playlist-thumbnail-container">
        {playlist.videos.length === 0 ? (
          <div className="playlist-thumbnail-section">
            <h3>Empty playlist</h3>
          </div>
        ) : (
          <img
            className="img-resp"
            src={playlist.videos[0]?.img_src}
            alt="thumbnail-img"
          />
        )}
        <div className="flex-col gap-1 playlist-side-overlay-section align-center-flex justify-center-flex">
          <h4 className="playlist-video-count" style={{ color: "white" }}>
            {playlist.videos.length}+
          </h4>
          <button
            className="view-playlist-btn curs-point explore-btn"
            onClick={() => navigate(`/playlist/${playlist._id}`)}
          >
            View
          </button>
        </div>
      </div>
      <div className="flex-col playlist-detail-section">
        <h3>{playlist.title}</h3>
        <p>{playlist.description}</p>
      </div>
      <button
        className="item-remove-btn curs-point"
        onClick={() => removePlaylist(playlist._id)}
      >
        Remove playlist
      </button>
    </div>
  );
};

export { PlaylistCard };
