import "./Login.css";
import { useState } from "react";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { InputField, PasswordField } from "../../components/InputFields";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary/ButtonPrimary";
import { loginService } from "../../services/auth/loginService";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true },
  });

  const { setIsAuth, setToken } = useAuth();

  const navigate = useNavigate();

  const guestLoginCredentials = {
    email: "dipenchavda123@gmail.com",
    password: "dipenchavda123",
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      input: { ...prevData.input, [name]: value },
    }));
  };

  const showHidePasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { pwd: !prevData.hide.pwd },
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken } = await loginService(inputData.input);
      setIsAuth(true);
      setToken(encodedToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      setInputData((prevData) => ({
        ...prevData,
        input: { email: "", password: "" },
      }));
      toast("Logged in successfully.", {
        icon: "✅",
        style: {
          backgroundColor: "var(--bg-color)",
          color: "white",
          borderRadius: "15px",
          boxShadow:
            "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
        },
      });
      navigate("/");
    } catch (e) {
      console.error(e);
      toast("wrong credentials.", {
        icon: "❌",
        style: {
          backgroundColor: "var(--bg-color)",
          color: "white",
          borderRadius: "15px",
          boxShadow:
            "0 8px 8px rgba(36, 245, 81, 0.587), 0 5px 5px rgba(36, 245, 81, 0.587)",
        },
      });
    }
  };
  return (
    <ShoetubeContainer>
      <section className="flex-row justify-center-flex login-page-container">
        <div className="login-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Login</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form onSubmit={loginHandler}>
              <div className="flex-col gap-1">
                <InputField
                  type={"email"}
                  fieldTitle={"Email"}
                  name={"email"}
                  fieldPlaceholder={"Enter your Email."}
                  onChange={inputChangeHandler}
                  value={inputData.input.email}
                  required={true}
                />
                <PasswordField
                  type={inputData.hide.pwd ? "password" : "text"}
                  fieldTitle={"Password"}
                  name={"password"}
                  fieldPlaceholder={"Enter your Password."}
                  onChange={inputChangeHandler}
                  value={inputData.input.password}
                  required={true}
                >
                  <div className="curs-point" onClick={showHidePasswordHandler}>
                    <i
                      className={`fa-solid ${
                        inputData.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <div className="flex-col">
                  <div className="flex-row justify-center-flex">
                    <button className="curs-point btn-primary explore-btn">
                      Login
                    </button>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <span>or</span>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <button
                      className="curs-point btn-primary explore-btn"
                      onClick={() => {
                        setInputData((prevData) => ({
                          ...prevData,
                          input: guestLoginCredentials,
                        }));
                      }}
                    >
                      Guest Login
                    </button>
                  </div>
                </div>
                <div className="flex-row gap-1">
                  <span>New to SHOEDOG?</span>
                  <Link
                    to="/signup"
                    className="curs-point"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ShoetubeContainer>
  );
};

export { Login };
