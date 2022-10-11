import React from "react";
import "./SearchBox.scss";

const SearchBox = ({searchFilter}) => {
  return (
    <div className="search">
      <h2 className="search__heading">Or ...</h2>
      <input className="search__input" type="text" placeholder="search beers by name ..." onChange={searchFilter} />
    </div>
  );
};

export default SearchBox;
