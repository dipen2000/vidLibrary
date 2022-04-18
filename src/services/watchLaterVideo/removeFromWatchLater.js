import axios from "axios";

const removeFromWatchLater = async ({ _id, videoStateDispatch }) => {
  try {
    const res = await axios.delete(`/api/user/watchlater/${_id}`);
    if (res.status === 200) {
      videoStateDispatch({
        type: "HANDLE_WATCHLATER",
        payload: res.data.watchlater,
      });
    }
  } catch (e) {
    console.log(error);
  }
};

export { removeFromWatchLater };
