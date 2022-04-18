import axios from "axios";

const disLikeVideo = async ({ _id, videoStateDispatch }) => {
  try {
    const res = await axios.delete(`/api/user/likes/${_id}`);
    if (res.status === 200) {
      videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
    }
  } catch (e) {
    console.log(error);
  }
};

export { disLikeVideo };
