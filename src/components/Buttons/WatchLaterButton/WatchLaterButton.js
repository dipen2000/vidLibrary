import "./WatchLaterButton.css";
import { useWatchLater } from "../../../context/watchLaterContext";
const WatchLaterButton = ({ video }) => {
  const { toggleWatchLater, watchLaterState } = useWatchLater();
  const videoInWatchLaterList = watchLaterState.find(
    (item) => item._id === video._id
  );
  return (
    <button
      className="curs-point"
      onClick={() => toggleWatchLater(video, videoInWatchLaterList)}
    >
      {videoInWatchLaterList ? "Remove from watch later" : "Watch later"}
    </button>
  );
};

export { WatchLaterButton };
