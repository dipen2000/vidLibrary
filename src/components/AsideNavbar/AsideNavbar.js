import { Link } from "react-router-dom";
import { useVideoState } from "../../contexts/videoStateContext";
import "./AsideNavbar.css";
const AsideNavbar = () => {
  const {
    videoState: { likedList, watchLater, history, playLists },
  } = useVideoState();
  return (
    <aside className="aside-container">
      <div className="flex-col side-nav-section justify-space-between-flex align-center-flex">
        <ul className="flex-col align-center-flex">
          <li className="aside-list">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li className="aside-list">
            <Link to="/playlist">
              <h3>Playlists ({playLists.length})</h3>
            </Link>
          </li>
          <li className="aside-list">
            <Link to="/liked">
              <h3>Liked ({likedList.length})</h3>
            </Link>
          </li>
          <li className="aside-list">
            <Link to="/watch-later">
              <h3>Watch later ({watchLater.length})</h3>
            </Link>
          </li>
          <li className="aside-list">
            <Link to="/history">
              <h3>History ({history.length})</h3>
            </Link>
          </li>
        </ul>
        <a href="https://twitter.com/DipenChavda2" target="_blank">
          <h3>Connect with me!</h3>
        </a>
      </div>
    </aside>
  );
};

export { AsideNavbar };
