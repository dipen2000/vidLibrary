import { Link } from "react-router-dom";
import "./AsideNavbar.css";
const AsideNavbar = () => {
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
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <Link to="/watch-later">Watch later</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
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
