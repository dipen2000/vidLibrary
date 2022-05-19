import "./SaveButton.css";
import { useModal } from "../../../context/modalContext";
const SaveButton = ({ video }) => {
  const { setIsModalShown, setVideoForPlaylist } = useModal();
  // const isInPlaylist = ?
  //  // console.log(video);
  return (
    <>
      <button
        className="curs-point"
        onClick={() => {
          setVideoForPlaylist(video);
          setIsModalShown(true);
        }}
      >
        Save
      </button>
    </>
  );
};

export { SaveButton };
