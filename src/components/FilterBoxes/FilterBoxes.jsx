import React from "react";
import "./FilterBoxes.scss";

const FilterBoxes = ({handleChecked}) => {
  return (
    <div className="filter-boxes">
      <div>
        <input type="checkbox" name="bum" value="cheese" onChange={handleChecked} />
        <label htmlFor="bum">click me</label>
      </div>
    </div>
  );
};

export default FilterBoxes;
