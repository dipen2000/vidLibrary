import { ButtonPrimary } from "../Buttons";
import { useModal } from "../../context/modalContext";
import "./Modal.css";
const Modal = () => {
  const { setIsModalShown } = useModal();
  return (
    <div className="modal-overlay-container flex-row align-center-flex justify-center-flex">
      <div className="modal flex-col bord-3-blue">
        <div className="flex-row align-center-flex justify-flex-end">
          <button className="curs-point" onClick={() => setIsModalShown(false)}>
            x
          </button>
        </div>
        <h3>Playlist</h3>
        <ButtonPrimary>Add a new playlist</ButtonPrimary>
      </div>
    </div>
  );
};

export { Modal };
