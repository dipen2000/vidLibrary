import "./VideoCard.css";
import { LikeButton } from "../buttons/LikeButton";
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
          <button>play</button>
          <div className="flex-row">
            <button>add to playlist</button>
            <button>add to watch later</button>
            <LikeButton video={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
