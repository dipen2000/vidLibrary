import "./SaveButton.css";
import { useModal } from "../../../context/modalContext";
import { AddedToPlaylist } from "../../../assets/AddedToPlaylist";
import { AddToPlaylist } from "../../../assets/AddToPlaylist";
const SaveButton = ({ video }) => {
  const { setIsModalShown, setVideoForPlaylist } = useModal();
  // const isInPlaylist = ?
  //  // console.log(video);
  return (
    <>
      <span
        className="curs-point vid-lib-CTA-icon-container"
        onClick={() => {
          setVideoForPlaylist(video);
          setIsModalShown(true);
        }}
      >
        <i className="fa-regular fa-floppy-disk"></i>
      </span>
    </>
  );
};

export { SaveButton };
