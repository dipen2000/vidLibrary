import axios from "axios";

const addToPlaylistService = async (token, video, playlistId) => {
  return await axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addToPlaylistService };
