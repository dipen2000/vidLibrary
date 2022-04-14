import axios from "axios";

const deletePlaylist = async ({ playlistId, videoStateDispatch }) => {
  try {
    const res = await axios.delete(`/api/user/playlists/${playlistId}`);
    if (res.status === 200) {
      videoStateDispatch({
        type: "HANDLE_PLAYLISTS",
        payload: res.data.playlists,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export { deletePlaylist };
