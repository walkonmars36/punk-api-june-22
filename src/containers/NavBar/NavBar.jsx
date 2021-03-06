import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";

const NavBar = ({searchFilter, handleChecked}) => {
  const filters = ["High ABV (> 6.%)", "Classic Range", "Acidic (Ph < 4)"];

  return (
    <div className="nav">
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
      <div>
        <h2 className="nav__filter-list-heading">or filter your search ...</h2>
        <FilterList filters={filters} handleChecked={handleChecked} />
      </div>
    </div>
  );
};

export default NavBar;
