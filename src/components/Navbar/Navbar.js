import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../Buttons";
import { useAuth } from "../../context/authContext";
import { useLiked } from "../../context/likeContext";
import { useWatchLater } from "../../context/watchLaterContext";
import { useHistory } from "../../context/historyContext";
import { usePlaylist } from "../../context/playlistContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { likedState } = useLiked();
  const { watchLaterState } = useWatchLater();
  const { historyState } = useHistory();
  const { playlistState } = usePlaylist();
  return (
    <header className="navbar-sticky">
      <nav className="navbar flex-row justify-space-between-flex align-center-flex">
        <Link to="/" className="curs-point">
          <h2>SHOETUBE</h2>
        </Link>
        <div className="right-nav-links-container flex-row align-center-flex justify-center-flex">
          <div
            className="flex-row align-center-flex justify-center-flex nav-icon-container card-box-shadow curs-point relative"
            onClick={() => {
              navigate("/playlists");
            }}
          >
            <i className={`fa-solid fa-floppy-disk`}></i>
            {playlistState.length > 0 && (
              <div className="nav-icon-badge-container absolute">
                {playlistState.length}
              </div>
            )}
          </div>
          <div
            className="flex-row align-center-flex justify-center-flex nav-icon-container card-box-shadow curs-point relative"
            onClick={() => {
              navigate("/liked");
            }}
          >
            <i className={`fa-solid fa-heart`}></i>
            {likedState.length > 0 && (
              <div className="nav-icon-badge-container absolute">
                {likedState.length}
              </div>
            )}
          </div>
          <div
            className="flex-row align-center-flex justify-center-flex nav-icon-container card-box-shadow curs-point relative"
            onClick={() => {
              navigate("/watch-later");
            }}
          >
            <i className={`fa-solid fa-clock`}></i>
            {watchLaterState.length > 0 && (
              <div className="nav-icon-badge-container absolute">
                {watchLaterState.length}
              </div>
            )}
          </div>
          <div
            className="flex-row align-center-flex justify-center-flex nav-icon-container card-box-shadow curs-point"
            onClick={() => {
              navigate("/history");
            }}
          >
            <i className={`fa-solid fa-clock-rotate-left`}></i>
          </div>
          <button
            className="curs-point btn-primary"
            onClick={() => navigate(`${isAuth ? "/logout" : "/login"}`)}
          >
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
