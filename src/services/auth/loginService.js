import axios from "axios";
const loginService = async (inputData) => {
  const res = await axios.post("/api/auth/login", inputData);
  console.log(res);
  return res.data;
};

export { loginService };
