import axios from "axios";

const dislikeVideoService = async (videoId, token) => {
  return await axios.delete(`/api/user/likes/${videoId}`, {
    headers: { authorization: token },
  });
};

export { dislikeVideoService };
