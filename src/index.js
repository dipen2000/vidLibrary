import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { AuthProvider } from "./context/authContext";
import { VideoProvider } from "./context/videoContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
