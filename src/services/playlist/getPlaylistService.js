import axios from "axios";

const getPlaylistService = async (token) => {
  return await axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};

export { getPlaylistService };
