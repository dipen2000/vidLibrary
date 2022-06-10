import axios from "axios";

const likeVideoService = async (video, token) => {
  return await axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { likeVideoService };
