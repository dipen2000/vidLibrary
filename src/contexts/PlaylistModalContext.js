import { createContext, useContext, useState } from "react";

const PlaylistModalContext = createContext();

const usePlaylistModal = () => useContext(PlaylistModalContext);

const PlaylistModalProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [video, setVideo] = useState({});

  return (
    <PlaylistModalContext.Provider
      value={{ displayModal, setDisplayModal, video, setVideo }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

export { PlaylistModalProvider, usePlaylistModal };
