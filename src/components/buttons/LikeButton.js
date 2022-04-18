import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { likeVideo } from "../../services/likeVideo/likeVideo";
import { disLikeVideo } from "../../services/likeVideo/disLikeVideo";
import { isVideoLiked } from "../../utils/videoUtil";
const LikeButton = ({ video }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const {
    videoState: { likedList },
    videoStateDispatch,
  } = useVideoState();
  const liked = isVideoLiked({ _id, likedList });

  const handleLike = () => {
    if (isUserLoggedIn) {
      if (liked) disLikeVideo({ _id, videoStateDispatch });
      else likeVideo({ video, videoStateDispatch });
    } else navigate("/login");
  };

  return (
    <button title="Like" onClick={() => handleLike()}>
      {liked ? "dislike" : "like"}
    </button>
  );
};

export { LikeButton };
