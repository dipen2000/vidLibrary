import "./WatchLaterButton.css";
import { useWatchLater } from "../../../context/watchLaterContext";
const WatchLaterButton = ({ video }) => {
  const { toggleWatchLater, watchLaterState } = useWatchLater();
  const videoInWatchLaterList = watchLaterState.find(
    (item) => item._id === video._id
  );
  return (
    <button
      className="curs-point vid-lib-CTA-icon-container"
      onClick={() => toggleWatchLater(video, videoInWatchLaterList)}
    >
      <i
        className={`${
          videoInWatchLaterList ? "fa-solid" : "fa-regular"
        } fa-regular fa-clock`}
      ></i>
    </button>
  );
};

export { WatchLaterButton };
