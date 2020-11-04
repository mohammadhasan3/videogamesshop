import { React } from "react";
import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      placeholder="Search for a videogame..."
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
