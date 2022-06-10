import axios from "axios";

const getLikedList = async (token) => {
  return await axios.get("/api/user/likes", {
    headers: { authorization: token },
  });
};

export { getLikedList };
