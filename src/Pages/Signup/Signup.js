import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { InputField, PasswordField } from "../../components/InputFields";
import { signupService } from "../../services/auth/signupService";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true, confPwd: true },
  });

  const { setIsAuth, setToken } = useAuth();

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
      hide: { ...prevData.hide, pwd: !prevData.hide.pwd },
    }));
  };

  const showHideConfirmPasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { ...prevData.hide, confPwd: !prevData.hide.confPwd },
    }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { encodedToken } = await signupService(inputData.input);
      setIsAuth(true);
      setToken(encodedToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", encodedToken);
      setInputData((prevData) => ({
        ...prevData,
        input: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      }));
      toast("Signed up successfully.", {
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
      toast("Something went wrong.", {
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
      <section className="flex-row justify-center-flex signup-page-container">
        <div className="signup-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Signup</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form onSubmit={signUpHandler}>
              <div className="flex-col gap-1">
                <InputField
                  type={"text"}
                  fieldTitle={"First name"}
                  name={"firstName"}
                  fieldPlaceholder={"Enter your first name."}
                  onChange={inputChangeHandler}
                  value={inputData.input.firstName}
                  required={true}
                />
                <InputField
                  type={"text"}
                  fieldTitle={"Last Name"}
                  name={"lastName"}
                  fieldPlaceholder={"Enter your last name."}
                  onChange={inputChangeHandler}
                  value={inputData.input.lastName}
                  required={true}
                />
                <InputField
                  type={"email"}
                  fieldTitle={"Email"}
                  name={"email"}
                  fieldPlaceholder={"Enter your email."}
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
                <PasswordField
                  type={inputData.hide.confPwd ? "password" : "text"}
                  fieldTitle={"Confirm Password"}
                  name={"confirmPassword"}
                  fieldPlaceholder={"Enter your Password again"}
                  onChange={inputChangeHandler}
                  value={inputData.input.confirmPassword}
                  required={true}
                >
                  <div
                    className="curs-point"
                    onClick={showHideConfirmPasswordHandler}
                  >
                    <i
                      className={`fa-solid ${
                        inputData.hide.confPwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <div className="flex-row justify-center-flex">
                  <div>
                    <button className="curs-point btn-primary explore-btn">
                      Signup
                    </button>
                  </div>
                </div>
                {true &&
                  !(
                    inputData.input.password === inputData.input.confirmPassword
                  ) && <p>The passwords you entered does not match.</p>}
                <div className="flex-row gap-1">
                  <span>New to SHOEDOG?</span>
                  <Link className="curs-point clr-primary" to="/login">
                    Login
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

export { Signup };
