import "./buttons.css";
import { useVideoState } from "../../contexts/videoStateContext";
import { removeFromPlaylist } from "../../services/playlist/removeFromPlaylist";
const RemoveFromPlaylistButton = ({ video, playlistId }) => {
  const { _id } = video;
  const { videoStateDispatch } = useVideoState();
  return (
    <button
      className="btn btn-primary-solid shoetube-btn-main"
      onClick={() =>
        removeFromPlaylist({
          playlistId,
          videoId: _id,
          videoStateDispatch,
        })
      }
    >
      <i class="fa-solid fa-trash"></i>
    </button>
  );
};

export { RemoveFromPlaylistButton };
