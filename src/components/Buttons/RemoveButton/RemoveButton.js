import "./RemoveButton.css";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../../context/playlistContext";
const RemoveButton = ({ video }) => {
  const { playlistId } = useParams();
  const { removeFromPlaylist } = usePlaylist();
  return (
    <button
      className="vid-lib-CTA-icon-container curs-point"
      onClick={() => removeFromPlaylist(video, playlistId)}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  );
};

export { RemoveButton };
