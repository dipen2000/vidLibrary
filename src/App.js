import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { PlaylistModal } from "./components/Modal/PlaylistModal";
import { usePlaylistModal } from "./contexts/PlaylistModalContext";

function App() {
  const { displayModal } = usePlaylistModal();
  return (
    <div className="App">
      <NavRoutes />
      {displayModal && <PlaylistModal />}
    </div>
  );
}

export default App;
