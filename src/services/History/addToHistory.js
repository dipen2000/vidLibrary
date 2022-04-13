import axios from "axios";

const addToHistory = async ({ video, videoStateDispatch }) => {
  try {
    const res = await axios.post("/api/user/history", { video });
    if (res.status === 201) {
      videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
    }
  } catch (e) {
    console.log(e);
  }
};

export { addToHistory };
