import { Link } from "react-router-dom";
import { useVideoState } from "../../contexts/videoStateContext";
import "./AsideNavbar.css";
const AsideNavbar = () => {
  const {
    videoState: { likedList, watchLater, history },
  } = useVideoState();
  return (
    <aside className="aside-container">
      <div className="flex-col side-nav-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playlist">Playlists</Link>
          </li>
          <li>
            <Link to="/liked">Liked ({likedList.length})</Link>
          </li>
          <li>
            <Link to="/watch-later">Watch later ({watchLater.length})</Link>
          </li>
          <li>
            <Link to="/history">History ({history.length})</Link>
          </li>
        </ul>
        <a href="https://twitter.com/DipenChavda2" target="_blank">
          Connect with me!
        </a>
      </div>
    </aside>
  );
};

export { AsideNavbar };
