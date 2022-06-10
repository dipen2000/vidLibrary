import "./RemoveButton.css";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../../context/playlistContext";
const RemoveButton = ({ video }) => {
  const { playlistId } = useParams();
  const { removeFromPlaylist } = usePlaylist();
  return (
    <button
      className="curs-point"
      onClick={() => removeFromPlaylist(video, playlistId)}
    >
      remove
    </button>
  );
};

export { RemoveButton };
