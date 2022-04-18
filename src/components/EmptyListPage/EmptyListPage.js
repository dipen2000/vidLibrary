import { useNavigate } from "react-router-dom";
import "./EmptyListPage.css";
const EmptyListPage = ({ text, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>{text}</div>
        {children}
      </div>
    </>
  );
};

export { EmptyListPage };
