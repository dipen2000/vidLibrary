import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar flex-row align-center-flex justify-space-between-flex">
        <Link to="/">
          <h2>SHOETUBE</h2>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
