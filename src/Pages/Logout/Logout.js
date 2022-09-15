import "./Logout.css";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { ButtonPrimary } from "../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Logout = () => {
  const { setIsAuth, setToken } = useAuth();
  setIsAuth(false);
  setToken("");
  localStorage.clear();
  useEffect(() => {
    toast("Logged out successfully.", {
      icon: "✅",
      style: {
        backgroundColor: "var(--bg-color)",
        color: "white",
        borderRadius: "15px",
        boxShadow:
          "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
      },
    });
  }, []);
  const navigate = useNavigate();
  return (
    <ShoetubeContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <i class="fa-solid fa-circle-check clr-primary"></i>
        <h2>You are successfully logged out</h2>
        <button
          className="curs-point btn-primary explore-btn"
          onClick={() => navigate("/")}
        >
          Go back to Home page
        </button>
      </div>
    </ShoetubeContainer>
  );
};

export { Logout };
