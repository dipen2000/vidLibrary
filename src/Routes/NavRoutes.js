import { Routes, Route } from "react-router-dom";
import { Home, Playlists, Liked, History, WatchLater, Page404 } from "../Pages";
const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export { NavRoutes };
