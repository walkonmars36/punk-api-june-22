import React from "react";

const FilterItem = ({filterLabel, handleChecked, index}) => {
  return (
    <div>
      <label htmlFor="filterItem">{filterLabel}</label>
      <input type="checkbox" name="filterItem" value={filterLabel} id={index} onChange={handleChecked} />
    </div>
  );
};

export default FilterItem;
