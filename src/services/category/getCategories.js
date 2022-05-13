import axios from "axios";

const getCategories = async () => {
  return await axios.get("/api/categories");
};

export { getCategories };
