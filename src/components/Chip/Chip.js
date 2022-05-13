import "./Chip.css";
const Chip = ({ children, style, onClick }) => {
  return (
    <span style={style} onClick={onClick} className="chip curs-point">
      {children}
    </span>
  );
};

export { Chip };
