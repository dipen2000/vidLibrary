import axios from "axios";

const loginService = async ({
  setError,
  data,
  userDataDispatch,
  setIsUserLoggedIn,
  navigate,
}) => {
  try {
    const {
      data: {
        foundUser: { firstName, lastName, createdAt },
        encodedToken,
      },
    } = await axios.post("/api/auth/login", data);
    setIsUserLoggedIn(true);
    userDataDispatch({
      type: "ADD_USER",
      payload: { firstName, lastName, createdAt },
    });
    axios.defaults.headers.common["authorization"] = encodedToken;
    localStorage.setItem("token", encodedToken);
    navigate("/");
  } catch (e) {
    setError(e.response.data.errors);
  }
};

export { loginService };
