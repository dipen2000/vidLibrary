import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { useVideoState } from "../../contexts/videoStateContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { SingleVideoPageCard } from "../../components/SingleVideoPageCard/SingleVideoPageCard";
const VideoPage = () => {
  const { videoId } = useParams();
  const {
    videoState: { videoList },
    videoStateDispatch,
  } = useVideoState();

  const video = videoList?.find((video) => video.id === videoId);
  if (!video) return <div>loading...</div>;
  return (
    <>
      <Navbar />
      <div className="video-page-container">
        <div className="grid-container">
          <AsideNavbar />
          <SingleVideoPageCard video={video} />
        </div>
      </div>
    </>
  );
};

export { VideoPage };
