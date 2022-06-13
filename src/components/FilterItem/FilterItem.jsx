import React from "react";
import "./FilterItem.scss";

const FilterItem = ({isChecked, label, checkHandler, index, filteredBy}) => {
  return (
    <div className="filterItem">
      <input type="checkbox" id={`checkbox-${index}`} checked={isChecked} onChange={checkHandler} />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};

export default FilterItem;
