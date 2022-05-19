import axios from "axios";

const removePlaylistService = async (token, playlistId) => {
  return await axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { removePlaylistService };
