import axios from "axios";
import { addToPlaylist } from "./addToPlaylist";

const createPlaylist = async ({ video, playlist, videoStateDispatch }) => {
  try {
    const res = await axios.post("/api/user/playlists", { playlist });
    if (res.status === 201) {
      videoStateDispatch({
        type: "HANDLE_PLAYLISTS",
        payload: res.data.playlists,
      });
      if (video) {
        const playlistId = res.data.playlists.slice(-1)[0]._id;
        addToPlaylist({
          playlistId,
          video,
          videoStateDispatch,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export { createPlaylist };
