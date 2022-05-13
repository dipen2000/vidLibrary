import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="curs-point">
      {children}
    </button>
  );
};

export { ButtonPrimary };
