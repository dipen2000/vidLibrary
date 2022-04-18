import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { loginService } from "../../services/Auth/loginService";
import { useUserContext } from "../../contexts/UserContext";
const Login = () => {
  const [error, setError] = useState();
  const [loginInput, setLoginInput] = useState({
    input: {},
    hide: { pwd: true },
  });
  const navigate = useNavigate();
  const { setIsUserLoggedIn, userDataDispatch } = useUserContext();

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      input: { ...loginInput.input, [name]: value },
    });
  };

  const guestLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  return (
    <>
      <Navbar />
      <section className="login-container flex-col align-center-flex justify-center-flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginService({
              setError,
              data: loginInput.input,
              userDataDispatch,
              setIsUserLoggedIn,
              navigate,
            });
          }}
        >
          <h2 className="heading-2">Login</h2>
          <input
            className="shoetube-input-box"
            type="email"
            name="email"
            placeholder="Enter your e-mail here"
            value={loginInput.input.email}
            onChange={loginInputHandler}
          />
          <br />
          <input
            className="shoetube-input-box"
            type={loginInput.hide.pwd ? "password" : "text"}
            name="password"
            placeholder="Enter your password"
            value={loginInput.input.password}
            onChange={loginInputHandler}
          />
          <span
            className="curs-point heading-4 show-hide-toggle"
            onClick={() =>
              setLoginInput({
                ...loginInput,
                hide: { pwd: !loginInput.hide.pwd },
              })
            }
          >
            {loginInput.hide.pwd ? "show" : "hide"}
          </span>
          <br />
          <button className="curs-point btn btn-primary-solid shoetube-btn-main">
            login
          </button>
          <p className="heading-4 flex-row align-center-flex justify-center-flex">
            or
          </p>
          <button
            className="curs-point btn btn-primary-solid shoetube-btn-main"
            onClick={() => setLoginInput({ ...loginInput, input: guestLogin })}
          >
            Guest login
          </button>
          <div className="error-message">{error}</div>
        </form>
      </section>
    </>
  );
};

export { Login };
