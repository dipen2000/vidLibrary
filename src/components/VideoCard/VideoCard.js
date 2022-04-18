import "./VideoCard.css";
const VideoCard = () => {
  return (
    <div className="video-card-container flex-col">
      <div className="thumbnail-container">thumbnail here</div>
      <div className="flex-col video-details">
        <strong>Video name here.</strong>
        <div className="flex-row justify-space-between-flex">
          <p>by channel name</p>
          <p>20M views</p>
        </div>

        <div className="flex-row justify-space-between-flex">
          <button>play</button>
          <div className="flex-row">
            <button>add to playlist</button>
            <button>add to watch later</button>
            <button>like</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
