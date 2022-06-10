import { createContext, useContext, useState, useEffect } from "react";
import { getCategories } from "../services/category/getCategories";

const categoryContext = createContext();

const useCategory = () => useContext(categoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryState, setCategoryState] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await getCategories();
        if (status === 200) {
          setCategoryState(data.categories);
        }
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <categoryContext.Provider
      value={{ categoryState, selectedCategory, setSelectedCategory }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
