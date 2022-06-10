import "./Logout.css";
import { useAuth } from "../../context/authContext";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { Link } from "react-router-dom";
const Logout = () => {
  const { setIsAuth, setToken } = useAuth();
  setIsAuth(false);
  setToken("");
  localStorage.clear();
  return (
    <ShoetubeContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <h2>You are successfully logged out</h2>
        <p>
          Go back to the{" "}
          <Link className="curs-point" to="/">
            Home page
          </Link>
        </p>
      </div>
    </ShoetubeContainer>
  );
};

export { Logout };
