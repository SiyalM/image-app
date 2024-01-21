import React from "react";
import "./Search.css";
import { useSearch } from "../../context/search-context";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchText, setSearchText } = useSearch();

  return (
    <div className="search">
      <div className="search-icon"></div>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Link to="/results" className="btn-search">
        Go
      </Link>
    </div>
  );
};

export default Search;
