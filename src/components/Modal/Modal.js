import { ButtonPrimary } from "../Buttons";
import { useModal } from "../../context/modalContext";
import { useState } from "react";
import { InputField } from "../InputFields";
import { usePlaylist } from "../../context/playlistContext";

import "./Modal.css";
const Modal = () => {
  const [isPlaylistFormShown, setIsPlaylistFormShown] = useState(false);
  const [playlistFormInput, setPlaylistFormInput] = useState({});
  const { setIsModalShown, videoForPlaylist } = useModal();
  const { createPlaylist } = usePlaylist();
  const formInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setPlaylistFormInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="modal-overlay-container flex-row align-center-flex justify-center-flex">
      <div className="modal flex-col bord-3-black gap-1">
        <div className="flex-row align-center-flex justify-flex-end">
          {/* <button className="curs-point" onClick={() => setIsModalShown(false)}>
            x
          </button> */}
          <div
            className="modal-close-icon-container"
            onClick={() => setIsModalShown(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <h3>Playlist</h3>
        {isPlaylistFormShown ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createPlaylist(playlistFormInput, videoForPlaylist);
              setPlaylistFormInput({ title: "", description: "" });
              setIsModalShown(false);
            }}
          >
            <div className="flex-col gap-1 justify-center-flex align-center-flex">
              <InputField
                type={"text"}
                fieldTitle={"Title"}
                name={"title"}
                fieldPlaceholder={"Enter playlist title"}
                onChange={formInputChangeHandler}
                value={playlistFormInput.title}
                required={true}
              />
              <InputField
                type={"text"}
                fieldTitle={"Description"}
                name={"description"}
                fieldPlaceholder={"Enter playlist description"}
                onChange={formInputChangeHandler}
                value={playlistFormInput.description}
                required={true}
              />
              <button className="add-new-playlist-btn">Create playlist</button>
            </div>
          </form>
        ) : (
          <button
            className="add-new-playlist-btn"
            onClick={() => setIsPlaylistFormShown(true)}
          >
            Add a new playlist
          </button>
        )}
      </div>
    </div>
  );
};

export { Modal };
