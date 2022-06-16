import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchBeers, setSearchBeers] = useState([]);
  const [filterBy, setFilterBy] = useState([]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  //////////////////////////////////

  useEffect(() => {
    setSearchBeers(beers);
  }, [beers]);

  /////////////////////////////////

  const searchFilter = (event) => {
    if (event.target.value) {
      const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(event.target.value));
      setSearchBeers(searchBeers);
    } else {
      setSearchBeers(beers);
    }
  };

  ////////////////////////////////

  const filters = ["High ABV (> 6.%)", "Classic Range", "Acidic (PH < 4)"];

  // console.log(beers);

  const highABV = beers.filter((beer) => beer.abv > 6);
  const classicRange = beers.filter((beer) => beer.first_brewed.split("/")[4] === "0");
  const acidic = beers.filter((beer) => beer.ph < 4);

  // console.log(classicRange);
  // console.log(highABV);
  // console.log(acidic);

  const handleChecked = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);

    let clickedCheck = e.target.checked;
    let clickedValue = e.target.value;

    if (clickedValue === "High ABV (> 6.%)") {
      setFilterBy(highABV);
    }
    console.log(filterBy);
  };

  return (
    <div className="app">
      <div className="content">
        <NavBar handleChecked={handleChecked} searchFilter={searchFilter} filters={filters} />

        <Main beers={filterBy > 0 ? filterBy : searchBeers} />
      </div>
    </div>
  );
}

export default App;
