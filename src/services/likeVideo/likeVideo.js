import axios from "axios";

const likeVideo = async ({ video, videoStateDispatch }) => {
  try {
    const res = await axios.post("/api/user/likes", { video });
    if (res.status == 201) {
      videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
    }
  } catch (err) {
    console.log(error);
  }
};

export { likeVideo };
