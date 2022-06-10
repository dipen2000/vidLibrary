import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const useModal = () => useContext(modalContext);

const ModalProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <modalContext.Provider value={{ isModalShown, setIsModalShown }}>
      {children}
    </modalContext.Provider>
  );
};

export { ModalProvider, useModal };
