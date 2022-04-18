import "./PlaylistPageVideoCard.css";
import { RemoveFromPlaylistButton } from "../buttons/RemoveFromPlaylistButton";
import { LikeButton } from "../buttons/LikeButton";
import { PlayButton } from "../buttons/PlayButton";
import { WatchLaterButton } from "../buttons/WatchLaterButton";
const PlaylistPageVideoCard = ({ video, playlistId }) => {
  const { title, creator, views, img_src } = video;
  return (
    <div className="playlist-page-video-card-container flex-col card-box-shadow">
      <div className="playlist-page-card-thumbnail-container">
        <img src={img_src} className="img-resp" alt={`${title} ${creator}`} />
      </div>
      <div className="flex-col video-details">
        <strong className="playlist-page-card-font">{title}</strong>
        <div className="flex-row justify-space-between-flex">
          <p className="playlist-page-card-font">by {creator}</p>
          <p className="playlist-page-card-font">{views} views</p>
        </div>

        <div className="flex-row justify-space-between-flex">
          <PlayButton video={video} />
          <div className="flex-row">
            <LikeButton video={video} />
            <RemoveFromPlaylistButton video={video} playlistId={playlistId} />
            <WatchLaterButton video={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistPageVideoCard };
