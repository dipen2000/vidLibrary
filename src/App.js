import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NavRoutes } from "./Routes/NavRoutes";
import { Modal } from "./components/Modal/Modal";
import { useModal } from "./context/modalContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { isModalShown } = useModal();
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
      {isModalShown && <Modal />}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
