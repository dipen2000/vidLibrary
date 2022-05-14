import axios from "axios";

const moveToWatchLaterService = async (video, token) => {
  return await axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { moveToWatchLaterService };
