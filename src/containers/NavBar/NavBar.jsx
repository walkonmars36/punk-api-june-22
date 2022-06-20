import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";
import logo from "../../assets/images/brewdog-logo.jpeg";

const NavBar = ({searchFilter, handleChecked}) => {
  const filters = ["High ABV (> 6.%)", "Classic Range", "Acidic (PH < 4)"];

  return (
    <div className="nav">
      <div className="nav__image">{logo}</div>
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
      <div>
        <FilterList filters={filters} handleChecked={handleChecked} />
      </div>
    </div>
  );
};

export default NavBar;
