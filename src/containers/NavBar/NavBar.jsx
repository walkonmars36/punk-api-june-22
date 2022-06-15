import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";

const NavBar = ({searchFilter, handleChecked}) => {
  return (
    <div className="nav">
      <div>
        <FilterBoxes handleChecked={handleChecked} />
      </div>
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default NavBar;
