import axios from "axios";

const getHistoryList = async (token) => {
  return await axios.get("/api/user/history", {
    headers: { authorization: token },
  });
};

export { getHistoryList };
