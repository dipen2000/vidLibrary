import { useNavigate } from "react-router-dom";
const PlayButton = ({ videoId }) => {
  const navigate = useNavigate();
  return (
    <button
      className="curs-point"
      onClick={() => navigate(`/videos/${videoId}`)}
    >
      Play
    </button>
  );
};

export { PlayButton };
