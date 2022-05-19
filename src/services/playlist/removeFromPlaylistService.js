import axios from "axios";

const removeFromPlaylistService = async (token, video, playlistId) => {
  return await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromPlaylistService };
