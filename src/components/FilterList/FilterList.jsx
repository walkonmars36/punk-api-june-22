import React, {useEffect, useState} from "react";
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({acidicPH, classicRange, highABV}) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const checkHandler = () => {
  //   setIsChecked(!isChecked);
  // };

  const filterItems = [
    {name: "High ABV (>6.0%)", filteredBy: (event) => highABV(event), checked: false},

    {name: "Classic Range", filteredBy: (event) => classicRange(event), checked: false},

    {name: "Acidic (ph < 4)", filteredBy: (event) => acidicPH(event), checked: false},
  ];

  const [filtered, setFiltered] = useState(filterItems);

  const updateCheckStatus = (index) => {
    setFiltered(filtered.map((item, currentIndex) => (currentIndex === index ? {...item, checked: !item.checked} : item)));

    console.log("help!");
  };

  return (
    <div className="filterList">
      {filtered.map((item, index) => (
        <FilterItem key={item.name} isChecked={item.checked} checkHandler={() => updateCheckStatus(index)} label={item.name} filteredBy={item.filteredBy} />
      ))}

      {/* <FilterItem onChange={classicRange} />
      <FilterItem onChange={acidicPH} /> */}

      {/* {filterItems.map((filterObject) => (
        <FilterItem beerRange={filterObject.name} filteredBeer={filterObject.filteredAlcohol} />
      ))} */}
    </div>
  );
};

export default FilterList;
