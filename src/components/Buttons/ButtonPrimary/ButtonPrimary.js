import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className="curs-point btn-primary">
      {children}
    </button>
  );
};

export { ButtonPrimary };
