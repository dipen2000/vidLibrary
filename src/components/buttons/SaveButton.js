import { useNavigate } from "react-router-dom";
import { usePlaylistModal } from "../../contexts/PlaylistModalContext";
import { useUserContext } from "../../contexts/UserContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { isVideoSaved } from "../../utils/videoUtil";

const SaveButton = ({ video }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const {
    videoState: { playLists },
  } = useVideoState();

  const { setDisplayModal, setVideo } = usePlaylistModal();

  const openPlaylistModal = ({ video }) => {
    if (isUserLoggedIn) {
      setDisplayModal(true);
      setVideo(video);
    } else navigate("/login");
  };

  const saved = isVideoSaved({ _id, playLists });

  return (
    <button
      title={saved ? "Saved" : "Save"}
      onClick={() => openPlaylistModal({ video })}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
};

export { SaveButton };
