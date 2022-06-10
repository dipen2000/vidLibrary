import { useNavigate } from "react-router-dom";
import { useHistory } from "../../../context/historyContext";
const PlayButton = ({ video }) => {
  const { historyState, addToHistory } = useHistory();
  const navigate = useNavigate();
  const videoInHistoryList = historyState.find(
    (item) => item._id === video._id
  );
  return (
    <span
      className="curs-point vid-lib-CTA-icon-container"
      onClick={() => {
        addToHistory(video, videoInHistoryList);
        navigate(`/videos/${video._id}`);
      }}
    >
      <i className="fa-solid fa-play"></i>
    </span>
  );
};

export { PlayButton };
