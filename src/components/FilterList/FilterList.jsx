import React from "react";
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({handleChecked, filters}) => {
  return (
    <div className="filter-list">
      <h2 className="filter-list__heading">Filter by ...</h2>
      <div className="filter-list__content">
        {filters.map((filter, index) => {
          return <FilterItem filterLabel={filter} key={index} index={index} handleChecked={handleChecked} />;
        })}
      </div>
    </div>
  );
};

export default FilterList;
