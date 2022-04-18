import axios from "axios";

const addToWatchLater = async ({ video, videoStateDispatch }) => {
  try {
    const res = await axios.post("/api/user/watchlater", { video });
    if (res.status === 201) {
      videoStateDispatch({
        type: "HANDLE_WATCHLATER",
        payload: res.data.watchlater,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export { addToWatchLater };
