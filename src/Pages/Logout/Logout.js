import "./Logout.css";
import { useAuth } from "../../context/authContext";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { ButtonPrimary } from "../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
const Logout = () => {
  const { setIsAuth, setToken } = useAuth();
  setIsAuth(false);
  setToken("");
  localStorage.clear();
  const navigate = useNavigate();
  return (
    <ShoetubeContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <i class="fa-solid fa-circle-check"></i>
        <h2>You are successfully logged out</h2>
        <ButtonPrimary className="curs-point" onClick={() => navigate("/")}>
          Go back to Home page
        </ButtonPrimary>
      </div>
    </ShoetubeContainer>
  );
};

export { Logout };
