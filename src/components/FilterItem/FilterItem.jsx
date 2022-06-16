import React from "react";

const FilterItem = ({label, handleChecked}) => {
  return (
    <div>
      <label htmlFor="filterItem">{label}</label>
      <input type="checkbox" name="filterItem" value={label} onChange={handleChecked} />
    </div>
  );
};

export default FilterItem;
