import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const useModal = () => useContext(modalContext);

const ModalProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [videoForPlaylist, setVideoForPlaylist] = useState({});
  return (
    <modalContext.Provider
      value={{
        isModalShown,
        setIsModalShown,
        videoForPlaylist,
        setVideoForPlaylist,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export { ModalProvider, useModal };
