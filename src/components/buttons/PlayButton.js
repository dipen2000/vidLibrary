import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { addToHistory } from "../../services/History/addToHistory";
import { inHistory } from "../../utils/videoUtil";
import "./buttons.css";
const PlayButton = ({ video }) => {
  const { _id, id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const {
    videoState: { history },
    videoStateDispatch,
  } = useVideoState();
  const addedToHistory = inHistory({ _id, history });
  const openVideoAndHandleHistory = () => {
    if (isUserLoggedIn && !addedToHistory)
      addToHistory({ video, videoStateDispatch });
    navigate(`/${id}`);
  };

  return (
    <button
      className="btn btn-primary-solid shoetube-btn-main shoetube-play-btn"
      onClick={() => openVideoAndHandleHistory()}
    >
      <i className="fa-solid fa-play"></i>
    </button>
  );
};

export { PlayButton };
