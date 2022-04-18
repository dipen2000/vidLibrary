import "./Logout.css";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <>
      <div>You have logged out successfully...</div>
      <Link to="/">Go back to home.</Link>
    </>
  );
};

export { Logout };
