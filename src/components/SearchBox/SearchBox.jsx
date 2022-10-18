import React from "react";
import "./SearchBox.scss";

const SearchBox = ({searchFilter}) => {
  return (
    <div className="search">
      <h2 className="search__heading">Or ...</h2>
      <div className="search__input">
        <input className="search__input-field" type="text" placeholder="search beers by name ..." onChange={searchFilter} />
      </div>
    </div>
  );
};

export default SearchBox;
