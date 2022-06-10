import axios from "axios";

const removeFromWatchLaterService = async (videoId, token) => {
  return await axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromWatchLaterService };
