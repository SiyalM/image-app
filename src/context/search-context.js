import { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearch, SearchContext};
