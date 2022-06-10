import "./LikeButton.css";
import { useLiked } from "../../../context/likeContext";
const LikeButton = ({ video }) => {
  const { likedState, toggleLike } = useLiked();
  const videoInLikedList = likedState.find((item) => item._id === video._id);
  return (
    <span
      className="curs-point vid-lib-CTA-icon-container"
      onClick={() => toggleLike(video, videoInLikedList)}
    >
      <i
        className={`${videoInLikedList ? "fa-solid" : "fa-regular"}  fa-heart`}
      ></i>
    </span>
  );
};

export { LikeButton };
