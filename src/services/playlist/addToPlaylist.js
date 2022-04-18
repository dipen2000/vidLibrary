import axios from "axios";

const addToPlaylist = async ({ playlistId, video, videoStateDispatch }) => {
  try {
    const res = await axios.post(`/api/user/playlists/${playlistId}`, {
      video,
    });
    if (res.status === 201) {
      videoStateDispatch({
        type: "HANDLE_PLAYLIST",
        payload: res.data.playlist,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export { addToPlaylist };
