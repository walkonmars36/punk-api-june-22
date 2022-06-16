import React from "react";
import "./FilterBoxes.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterBoxes = ({handleChecked, filters}) => {
  return (
    <div className="filter-boxes">
      {filters.map((filter, index) => {
        return <FilterItem label={filter} key={index} handleChecked={handleChecked} />;
      })}
    </div>
  );
};

export default FilterBoxes;
