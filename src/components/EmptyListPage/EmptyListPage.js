import { useNavigate } from "react-router-dom";
import "./EmptyListPage.css";
const EmptyListPage = ({ text }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>{text}</div>
        <button onClick={() => navigate("/")}>Explore</button>
      </div>
    </>
  );
};

export { EmptyListPage };
