import { useVideoState } from "../../contexts/videoStateContext";
import { removeFromPlaylist } from "../../services/playlist/removeFromPlaylist";
const RemoveFromPlaylistButton = ({ video, playlistId }) => {
  const { _id } = video;
  const { videoStateDispatch } = useVideoState();
  return (
    <button
      onClick={() =>
        removeFromPlaylist({
          playlistId,
          videoId: _id,
          videoStateDispatch,
        })
      }
    >
      remove from playlist
    </button>
  );
};

export { RemoveFromPlaylistButton };
