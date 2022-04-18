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
  // console.log(useUserContext());
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

  //   console.log(loginInput.input);
  return (
    <>
      <Navbar />
      <section>
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
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail here"
            value={loginInput.input.email}
            onChange={loginInputHandler}
          />
          <br />
          <input
            type={loginInput.hide.pwd ? "password" : "text"}
            name="password"
            placeholder="Enter your password"
            value={loginInput.input.password}
            onChange={loginInputHandler}
          />
          <span
            className="curs-point"
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
          <button className="curs-point">login</button>
          <br />
          <button
            className="curs-point"
            onClick={() => setLoginInput({ ...loginInput, input: guestLogin })}
          >
            Guest login
          </button>
          <p>
            New to SHOETUBE? <Link to="/signup">Create new account</Link>
          </p>
          <div className="error-message">{error}</div>
        </form>
      </section>
    </>
  );
};

export { Login };
