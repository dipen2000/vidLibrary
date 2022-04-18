import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { logoutService } from "../../services/Auth/logoutService";
const Navbar = () => {
  const { isUserLoggedIn, setIsUserLoggedIn, userDataDispatch } =
    useUserContext();
  const navigate = useNavigate();
  return (
    <header className="nav-position-sticky">
      <nav className="navbar flex-row align-center-flex justify-space-between-flex">
        <Link to="/">
          <h2>SHOETUBE</h2>
        </Link>
        {isUserLoggedIn ? (
          <button
            className="btn btn-primary-solid shoetube-btn-main"
            onClick={() =>
              logoutService({ setIsUserLoggedIn, userDataDispatch })
            }
          >
            logout
          </button>
        ) : (
          <button
            className="btn btn-primary-solid shoetube-btn-main"
            onClick={() => navigate("/login")}
          >
            login
          </button>
        )}
        {/* <button>
          <Link to={`/${isUserLoggedIn ? "logout" : "login"}`}>
            {isUserLoggedIn ? "logout" : "login"}
          </Link>
        </button> */}
      </nav>
    </header>
  );
};

export { Navbar };
