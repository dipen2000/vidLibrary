import { useNavigate } from "react-router-dom";
import "./EmptyListPage.css";
const EmptyListPage = ({ text, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex-col align-center-flex justify-center-flex empty-videos-section">
          <h2 className="page-title-text">{text}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export { EmptyListPage };
