import "./SinglePlaylistCard.css";
import {
  PlayButton,
  LikeButton,
  WatchLaterButton,
  RemoveButton,
} from "../../Buttons";
const SinglePlaylistCard = ({ video }) => {
  const { title, creator, views, img_src, _id } = video;
  return (
    <div className="video-card-container flex-col card-box-shadow-green-vid-lib">
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
          <RemoveButton video={video} />
          <WatchLaterButton video={video} />
        </div>
      </div>
    </div>
  );
};

export { SinglePlaylistCard };
