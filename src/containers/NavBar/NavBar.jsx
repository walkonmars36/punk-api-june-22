import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";

const NavBar = ({searchFilter, handleChecked}) => {
  const filters = ["High ABV (> 6.%)", "Classic Range", "Acidic (Ph < 4)"];

  return (
    <div className="nav">
      <div className="nav__content">
        <FilterList filters={filters} handleChecked={handleChecked} />
        <SearchBox searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default NavBar;
