import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";

const NavBar = ({beers, setFilteredBeers, handleChecked, filterBy}) => {
  //// SEARCH
  const searchFilter = (event) => {
    if (event.target.value) {
      const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(event.target.value));
      setFilteredBeers(searchBeers);
    } else {
      setFilteredBeers(beers);
    }
  };

  return (
    <div className="nav">
      <div>
        <FilterBoxes onChange={handleChecked} options={["all", "high-abv", "classic-range", "high-acidity"]} selected={filterBy} />
      </div>
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default NavBar;
