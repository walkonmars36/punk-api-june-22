import React from "react";
import "./FilterBoxes.scss";

const FilterBoxes = ({onChange, options, selected}) => {
  return (
    <div className="filter-boxes">
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalised = optionLower[0].toUpperCase() + optionLower.slice(1);

        return (
          <div key={"check-box" + option + index}>
            <input type="checkbox" name="" value={optionLower} checked={optionLower === selected.toLowerCase()} onChange={onChange} />
            <label htmlFor={optionLower}>{optionCapitalised}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBoxes;
