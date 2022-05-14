import { useNavigate } from "react-router-dom";
import { useHistory } from "../../../context/historyContext";
const PlayButton = ({ video }) => {
  const { historyState, addToHistory } = useHistory();
  const navigate = useNavigate();
  const videoInHistoryList = historyState.find(
    (item) => item._id === video._id
  );
  return (
    <button
      className="curs-point"
      onClick={() => {
        addToHistory(video, videoInHistoryList);
        navigate(`/videos/${video._id}`);
      }}
    >
      Play
    </button>
  );
};

export { PlayButton };
