import "./PlaylistCard.css";
import "../buttons/buttons.css";
import { useNavigate } from "react-router-dom";
import { deletePlaylist } from "../../services/playlist/deletePlaylist";
import { useVideoState } from "../../contexts/videoStateContext";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, desc, videos } = playlist;
  const navigate = useNavigate();
  const { videoStateDispatch } = useVideoState();

  return (
    <div className="playlist-card-container flex-col card-box-shadow">
      <div className="playlist-thumbnail-container">
        {videos.length > 0 ? (
          <img src={videos[0].img_src} className="img-resp" alt={`${title} `} />
        ) : (
          <div className="flex-col empty-playlist-container justify-center-flex align-center-flex">
            <h3 className="heading-3">Empty playlist</h3>
          </div>
        )}

        <div className="playlist-overlay-container flex-col align-center-flex justify-center-flex">
          <p className="heading-4" style={{ color: "white" }}>
            {videos?.length} +
          </p>
          <button
            className="btn btn-primary-solid shoetube-btn-main btn-color-invert"
            onClick={() => navigate(`/playlist/${title}`)}
          >
            View
          </button>
        </div>
      </div>
      <div className="playlist-desc">
        <h3 className="heading-3">{title}</h3>
        <p>{desc}</p>
      </div>
      <button
        className=" btn-primary-solid shoetube-btn-main curs-point"
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
