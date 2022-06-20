import React from "react";
import "./FilterItem.scss";

const FilterItem = ({filterLabel, handleChecked, index}) => {
  return (
    <div className="filter-item">
      <label htmlFor="filterItem">{filterLabel}</label>
      <input type="checkbox" name="filterItem" value={filterLabel} id={index} onChange={handleChecked} />
    </div>
  );
};

export default FilterItem;
