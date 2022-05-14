import axios from "axios";

const removeFromHistoryService = async (videoId, token) => {
  return await axios.delete(`/api/user/history/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromHistoryService };
