import "./SaveButton.css";
import { useModal } from "../../../context/modalContext";
import { usePlaylist } from "../../../context/playlistContext";
import { checkIsVideoInPlaylist } from "../../../utils/videos/checkIsVideoInPlaylist";
const SaveButton = ({ video }) => {
  const { setIsModalShown, setVideoForPlaylist } = useModal();
  const isVideoInPlaylist = checkIsVideoInPlaylist(video);

  return (
    <>
      <span
        className="curs-point vid-lib-CTA-icon-container"
        onClick={() => {
          setVideoForPlaylist(video);
          setIsModalShown(true);
        }}
      >
        <i
          className={`${
            isVideoInPlaylist ? "fa-solid" : "fa-regular"
          }  fa-floppy-disk`}
        ></i>
      </span>
    </>
  );
};

export { SaveButton };
