import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/videoContext";
import {
  LikeButton,
  SaveButton,
  WatchLaterButton,
} from "../../components/Buttons";
import "./SingleVideoPage.css";
const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { videoState } = useVideos();
  const selectedVideo = videoState.find((video) => video._id === videoId);
  const { title, creator, description, views, url } = selectedVideo;
  return (
    <ShoetubeContainer>
      <div className="flex-col gap-1 mt-1">
        <div className=" flex-col align-center-flex justify-center-flex">
          <div className="single-video-contanier">
            <iframe
              className="single_page-video"
              src={url}
              allowFullScreen
              alt={`${title} ${creator}`}
            ></iframe>
          </div>
        </div>
        <div className="single-video-desc-container">
          <div className="flex-col single-video-details">
            <h2>{title}</h2>
            <h3>by {creator}</h3>
            <p>Description : {description}</p>
          </div>
        </div>

        <div className="flex-row gap-1">
          <LikeButton video={selectedVideo} />
          <SaveButton video={selectedVideo} />
          <WatchLaterButton video={selectedVideo} />
        </div>
      </div>
    </ShoetubeContainer>
  );
};

export { SingleVideoPage };

// <div className="single-page-video-container bord-3-purple">
//           <iframe
//             className="single_page-video"
//             src={url}
//             allowFullScreen
//             alt={`${title} ${creator}`}
//           ></iframe>
//         </div>
