import axios from "axios";
const removeFromHistory = async ({ _id, videoStateDispatch }) => {
  try {
    const res = await axios.delete(`/api/user/history/${_id}`);
    if (res.status === 200) {
      videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
    }
  } catch (e) {
    console.log(e);
  }
};

export { removeFromHistory };
