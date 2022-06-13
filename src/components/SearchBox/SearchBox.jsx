import React from "react";
import "./SearchBox.scss";

const SearchBox = ({searchFilter}) => {
  return (
    <div className="search">
      <input type="text" placeholder="search beers" onChange={searchFilter} />
    </div>
  );
};

export default SearchBox;
