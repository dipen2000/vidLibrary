import "./VideosSection.css";
import { ChipsSection } from "../ChipsSection/ChipsSection";
import { VideoListing } from "../VideoListing/VideoListing";
const VideosSection = () => {
  return (
    <main className="video-section-container flex-col">
      <ChipsSection />
      <VideoListing />
    </main>
  );
};

export { VideosSection };
