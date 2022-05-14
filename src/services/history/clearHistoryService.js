import axios from "axios";

const clearHistoryService = async (token) => {
  return await axios.delete("/api/user/history/all", {
    headers: { authorization: token },
  });
};

export { clearHistoryService };
