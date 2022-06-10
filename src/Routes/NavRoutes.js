import { Routes, Route } from "react-router-dom";
import {
  Home,
  Playlists,
  Liked,
  History,
  WatchLater,
  Page404,
  Login,
  Logout,
  Signup,
} from "../Pages";
import Mockman from "mockman-js";
import { RequiresAuth } from "../components/RequiresAuth/RequiresAuth";
// import { requiresAuth } from './../backend/utils/authUtils';
const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/playlists"
        element={
          <RequiresAuth>
            <Playlists />
          </RequiresAuth>
        }
      />
      <Route
        path="/liked"
        element={
          <RequiresAuth>
            <Liked />
          </RequiresAuth>
        }
      />
      <Route
        path="/watch-later"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<Page404 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export { NavRoutes };
