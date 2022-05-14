import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { AuthProvider } from "./context/authContext";
import { VideoProvider } from "./context/videoContext";
import { LikedProvider } from "./context/likeContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <CategoryProvider>
            <LikedProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </LikedProvider>
          </CategoryProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
