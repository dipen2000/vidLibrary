import "./VideoCard.css";
import { Modal } from "../../Modal/Modal";
import { useModal } from "../../../context/modalContext";
import {
  PlayButton,
  LikeButton,
  WatchLaterButton,
  SaveButton,
} from "../../Buttons";

const VideoCard = ({ video }) => {
  const { title, creator, views, img_src, _id } = video;
  const { isModalShown, setIsModalShown } = useModal();
  return (
    <div className="video-card-container flex-col card-box-shadow">
      <div className="video-thumbnail-container">
        <img className="img-resp" src={img_src} alt={`${title} ${creator}`} />
      </div>
      <div className="flex-col video-details-container">
        <strong>{title}</strong>
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>by {creator}</span>
          <span>{views} views</span>
        </div>
      </div>
      <div className="video-btn-CTA-container flex-row align-center-flex justify-space-between-flex">
        <PlayButton video={video} />
        <div className="flex-row align-center-flex gap-1">
          <LikeButton video={video} />
          <SaveButton video={video} />
          <WatchLaterButton video={video} />
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
