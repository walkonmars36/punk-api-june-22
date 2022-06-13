import {useState, useEffect} from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";

const NavBar = ({beers, filterItems, setFilteredBeers}) => {
  //// SEARCH
  const searchFilter = (event) => {
    if (event.target.value) {
      const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(event.target.value));
      setFilteredBeers(searchBeers);
    } else {
      setFilteredBeers(beers);
    }
  };

  //// HIGH ABV
  const highABV = (event) => {
    if (event.target.checked) {
      const filteredHigh = beers.filter((beer) => beer.abv > 6);
      setFilteredBeers(filteredHigh);
    } else {
      setFilteredBeers(beers);
    }
  };

  /// CLASSIC RANGE
  const classicRange = (event) => {
    if (event.target.checked) {
      const filteredClassic = beers.filter((beer) => beer.first_brewed.split("/")[1] <= 2010);
      setFilteredBeers(filteredClassic);
    } else {
      setFilteredBeers(beers);
    }
  };

  //// ACIDIC
  const acidicPH = (event) => {
    if (event.target.value) {
      const filteredAcidic = beers.filter((beer) => beer.ph < 4);
      setFilteredBeers(filteredAcidic);
    } else {
      setFilteredBeers(beers);
    }
  };

  return (
    <div className="nav">
      <div>
        <FilterList highABV={highABV} classicRange={classicRange} acidicPH={acidicPH} />
      </div>
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default NavBar;
