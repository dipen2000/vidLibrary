import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../Buttons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar-sticky">
      <nav className="navbar flex-row justify-space-between-flex align-center-flex">
        <Link to="/" className="curs-point">
          <h2>SHOETUBE</h2>
        </Link>
        <div className="right-nav-links-container flex-row align-center-flex justify-center-flex">
          <label htmlFor="dark-mode">
            <input className="curs-point" type="checkbox" name="dark-mode" />
            switch to dark mode
          </label>
          <div>
            <Link to="/playlists" className="curs-point">
              Playlists
            </Link>
          </div>
          <div>
            <Link to="/liked" className="curs-point">
              Liked
            </Link>
          </div>
          <div>
            <Link to="/watch-later" className="curs-point">
              Watch later
            </Link>
          </div>
          <div>
            <Link to="/history" className="curs-point">
              History
            </Link>
          </div>
          <ButtonPrimary>Login</ButtonPrimary>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
