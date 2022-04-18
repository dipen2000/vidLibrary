import axios from "axios";

const removeFromPlaylist = async ({
  videoId,
  playlistId,
  videoStateDispatch,
}) => {
  try {
    const res = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`
    );
    if (res.status === 200) {
      videoStateDispatch({
        type: "HANDLE_PLAYLIST",
        payload: res.data.playlist,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export { removeFromPlaylist };
