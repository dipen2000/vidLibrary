import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Playlists } from "../pages/Playlists/Playlists";
import { Liked } from "../pages/Liked/Liked";
import { WatchLater } from "../pages/WatchLater/WatchLater";
import { History } from "../pages/History/History";
import { Logout } from "../pages/Logout/Logout";
import { Signup } from "../pages/Signup/Signup";
import { VideoPage } from "../pages/VideoPage/VideoPage";
import Mockman from "mockman-js";
import { Page404 } from "../pages/Page404/Page404";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<Home />} />
      <Route path="/:videoId" element={<VideoPage />} />
      <Route path="/playlist" element={<Playlists />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export { NavRoutes };
