import "./PlaylistCard.css";
import { useNavigate } from "react-router-dom";
import { deletePlaylist } from "../../services/playlist/deletePlaylist";
import { useVideoState } from "../../contexts/videoStateContext";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, desc, videos } = playlist;
  const navigate = useNavigate();
  const { videoStateDispatch } = useVideoState();

  return (
    <div className="playlist-card-container flex-col">
      <div className="playlist-thumbnail-container">
        {videos.length > 0 ? (
          <img src={videos[0].img_src} className="img-resp" alt={`${title} `} />
        ) : (
          <p>Empty playlist</p>
        )}

        <div className="playlist-overlay-container flex-col align-center-flex justify-center-flex">
          <p style={{ color: "white" }}>{videos?.length} +</p>
          <button onClick={() => navigate(`/playlist/${title}`)}>View</button>
        </div>
      </div>
      <div className="playlist-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button
        onClick={() =>
          deletePlaylist({
            playlistId: _id,
            videoStateDispatch,
          })
        }
      >
        Remove playlist
      </button>
    </div>
  );
};

export { PlaylistCard };
