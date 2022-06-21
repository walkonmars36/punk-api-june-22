import React from "react";
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({handleChecked, filters}) => {
  return (
    <div className="filter-list">
      <h2 className="filter-list__heading">Filter Your Search</h2>
      {filters.map((filter, index) => {
        return <FilterItem filterLabel={filter} key={index} index={index} handleChecked={handleChecked} />;
      })}
    </div>
  );
};

export default FilterList;
