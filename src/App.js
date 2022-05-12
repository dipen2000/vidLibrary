import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NavRoutes } from "./Routes/NavRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
