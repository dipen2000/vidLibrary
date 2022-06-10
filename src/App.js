import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NavRoutes } from "./Routes/NavRoutes";
import { Modal } from "./components/Modal/Modal";
import { useModal } from "./context/modalContext";

function App() {
  const { isModalShown } = useModal();
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
      {isModalShown && <Modal />}
    </div>
  );
}

export default App;
