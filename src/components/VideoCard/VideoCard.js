import "./VideoCard.css";
import { LikeButton } from "../buttons/LikeButton";
import { WatchLaterButton } from "../buttons/WatchLaterButton";
import { SaveButton } from "../buttons/SaveButton";
import { PlayButton } from "../buttons/PlayButton";
const VideoCard = ({ video, children }) => {
  const { title, creator, img_src, views } = video;
  return (
    <div className="video-card-container flex-col">
      <div className="thumbnail-container">
        <img src={img_src} className="img-resp" alt={`${title} ${creator}`} />
      </div>
      <div className="flex-col video-details">
        <strong>{title}</strong>
        <div className="flex-row justify-space-between-flex">
          <p>by {creator}</p>
          <p>{views} views</p>
        </div>

        <div className="flex-row justify-space-between-flex">
          <PlayButton video={video} />
          <div className="flex-row">
            <LikeButton video={video} />
            <SaveButton video={video} />
            <WatchLaterButton video={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
