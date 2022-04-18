import "./buttons.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { addToWatchLater } from "../../services/watchLaterVideo/addToWatchLater";
import { removeFromWatchLater } from "../../services/watchLaterVideo/removeFromWatchLater";
import { isVideoInWatchLater } from "../../utils/videoUtil";

const WatchLaterButton = ({ video }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const {
    videoState: { watchLater },
    videoStateDispatch,
  } = useVideoState();

  const addedToWatchLater = isVideoInWatchLater({ _id, watchLater });

  const handleAddToWatchLater = () => {
    if (isUserLoggedIn) {
      if (addedToWatchLater) removeFromWatchLater({ _id, videoStateDispatch });
      else addToWatchLater({ video, videoStateDispatch });
    } else navigate("/login");
  };

  return (
    <button
      className="btn btn-primary-solid shoetube-btn-main"
      title={`${addedToWatchLater ? "Remove from" : "Add to"} watch later`}
      onClick={() => handleAddToWatchLater()}
    >
      {addedToWatchLater ? (
        <i class="fa-solid fa-clock"></i>
      ) : (
        <i class="fa-regular fa-clock"></i>
      )}
    </button>
  );
};

export { WatchLaterButton };
