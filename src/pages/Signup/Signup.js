import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    input: {},
    error: "",
    hide: { pwd: true, confirmPwd: true },
  });

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({
      ...signupInput,
      input: { ...signupInput.input, [name]: value },
    });
  };

  return (
    <>
      <form>
        <h2>Sign up</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name here."
          value={signupInput.input.firstName}
          onChange={signupInputHandler}
          required
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name here."
          value={signupInput.input.lastName}
          onChange={signupInputHandler}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signupInput.input.email}
          onChange={signupInputHandler}
          required
        />
        <br />
        <input
          type={signupInput.hide.pwd ? "password" : "text"}
          name="password"
          placeholder="Enter your password here"
          value={signupInput.input.password}
          onChange={signupInputHandler}
          required
        />
        <span
          className="curs-point"
          onClick={() =>
            setSignupInput({
              ...signupInput,
              hide: { ...signupInput.hide, pwd: !signupInput.hide.pwd },
            })
          }
        >
          {signupInput.hide.pwd ? "show" : "hide"}
        </span>
        <br />
        <input
          type={signupInput.hide.confirmPwd ? "password" : "text"}
          name="confirmPassword"
          placeholder="Enter your password again."
          value={signupInput.input.confirmPassword}
          onChange={signupInputHandler}
          required
        />
        <span
          className="curs-point"
          onClick={() =>
            setSignupInput({
              ...signupInput,
              hide: {
                ...signupInput.hide,
                confirmPwd: !signupInput.hide.confirmPwd,
              },
            })
          }
        >
          {signupInput.hide.confirmPwd ? "show" : "hide"}
        </span>
        <br />
        <button>Sign up</button>
        {signupInput.input.password !== signupInput.input.confirmPassword && (
          <div>Your passwords are not equal.</div>
        )}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export { Signup };
