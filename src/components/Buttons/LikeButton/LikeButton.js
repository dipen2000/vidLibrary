import "./LikeButton.css";
import { useLiked } from "../../../context/likeContext";
const LikeButton = ({ video }) => {
  const { likedState, toggleLike } = useLiked();
  const videoInLikedList = likedState.find((item) => item._id === video._id);
  return (
    <button
      className="curs-point"
      onClick={() => toggleLike(video, videoInLikedList)}
    >
      {videoInLikedList ? "Liked" : "Like"}
    </button>
  );
};

export { LikeButton };
