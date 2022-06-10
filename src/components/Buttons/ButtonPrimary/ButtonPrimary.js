import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="curs-point btn-primary">
      {children}
    </button>
  );
};

export { ButtonPrimary };
