import axios from "axios";

const getWatchLaterList = async (token) => {
  return await axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};

export { getWatchLaterList };
