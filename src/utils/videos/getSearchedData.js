const getSearchedData = (data, searchInput) => {
  if (searchInput === "") {
    return data;
  } else {
    return data.filter((video) =>
      video.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
};

export { getSearchedData };
