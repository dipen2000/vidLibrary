import "./SaveButton.css";
import { useModal } from "../../../context/modalContext";
import { Modal } from "../../Modal/Modal";
const SaveButton = () => {
  const { isModalShown, setIsModalShown } = useModal();
  return (
    <>
      {isModalShown && <Modal />}
      <button className="curs-point" onClick={() => setIsModalShown(true)}>
        Save
      </button>
    </>
  );
};

export { SaveButton };
