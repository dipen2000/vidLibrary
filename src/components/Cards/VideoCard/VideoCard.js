import "./VideoCard.css";
const VideoCard = ({ video }) => {
  const { title, creator, views, img_src } = video;
  return (
    <div className="bord-3-purple video-card-container flex-col">
      <div className="video-thumbnail-container bord-3-blue">
        <img className="img-resp" src={img_src} alt={`${title} ${creator}`} />
      </div>
      <div className="flex-col video-details-container">
        <strong>{title}</strong>
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>by {creator}</span>
          <span>{views} views</span>
        </div>
      </div>
      <div className="video-btn-CTA-container bord-3-blue flex-row align-center-flex justify-space-between-flex">
        <button>Play</button>
        <div className="flex-row align-center-flex">
          <button>Like</button>
          <button>Save</button>
          <button>Watch later</button>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
