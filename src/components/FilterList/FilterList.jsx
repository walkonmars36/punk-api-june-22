import React from "react";
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({handleChecked, filters}) => {
  return (
    <div className="filter-list">
      {filters.map((filter, index) => {
        return <FilterItem filterLabel={filter} key={index} index={index} handleChecked={handleChecked} />;
      })}
    </div>
  );
};

export default FilterList;
