import "./SearchBar.css";
const SearchBar = ({ onChange, value }) => {
  return (
    <div className="flex-row searchbar-container">
      <div className="icon-parent-container flex-col justify-center-flex">
        <div className="flex-row align-center-flex justify-center-flex">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="searchbar"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export { SearchBar };
