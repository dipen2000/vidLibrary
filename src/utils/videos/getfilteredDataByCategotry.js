const getfilteredDataByCategotry = (state, category) => {
  if (category === "All") {
    return state;
  } else {
    return state.filter((video) => video.categoryName === category);
  }
};

export { getfilteredDataByCategotry };
