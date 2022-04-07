import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { VideoFilterProvider } from "./contexts/videoFilterContext/videoFilterContext";
import { VideoStateProvider } from "./contexts/videoStateContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <VideoStateProvider>
          <VideoFilterProvider>
            <App />
          </VideoFilterProvider>
        </VideoStateProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
