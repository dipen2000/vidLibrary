import { getfilteredDataByCategotry } from "./getfilteredDataByCategotry";
import { getSearchedData } from "./getSearchedData";
const getFinalData = (state, category, searchInput) => {
  const filteredDataByCategotry = getfilteredDataByCategotry(state, category);
  const searchedData = getSearchedData(filteredDataByCategotry, searchInput);
  return searchedData;
};

export { getFinalData };
