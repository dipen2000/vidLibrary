import axios from "axios";

const clearHistory = async ({ videoStateDispatch }) => {
  try {
    const res = await axios.delete("/api/user/history/all");
    if (res.status === 200) {
      videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
    }
  } catch (e) {
    console.log(e);
  }
};

export { clearHistory };
