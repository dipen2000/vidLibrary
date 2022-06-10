import axios from "axios";

const createPlaylistService = async (token, formInput) => {
  return await axios.post(
    "/api/user/playlists",
    {
      playlist: formInput,
    },
    {
      headers: { authorization: token },
    }
  );
};

export { createPlaylistService };
