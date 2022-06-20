import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();

    setFilteredBeers(beers);
  }, [beers]);

  /////////////////////////////////

  const searchFilter = (e) => {
    if (e.target.value) {
      const searchTerm = beers.filter((beer) => beer.name.toLowerCase().includes(e.target.value));
      console.log(searchTerm);
      setFilteredBeers(searchTerm);
    } else {
      setFilteredBeers(beers);
    }
  };

  ////////////////////////////////

  const filterHighAbv = () => {
    const highAbvBeer = beers.filter((beer) => beer.abv > 6);
    console.log(highAbvBeer);
    setFilteredBeers(highAbvBeer);
  };

  //

  const filterClassic = () => {
    const classicBeer = beers.filter((beer) => beer.first_brewed.split("/")[1] <= 2009);
    console.log(classicBeer);
    setFilteredBeers(classicBeer);
  };

  //

  const filterAcidic = () => {
    const acidicBeer = beers.filter((beer) => beer.ph < 4);
    console.log(acidicBeer);
    setFilteredBeers(acidicBeer);
  };

  //

  const handleChecked = (e) => {
    if (e.target.id === "0") {
      filterHighAbv();
    }

    if (e.target.id === "1") {
      filterClassic();
    }

    if (e.target.id === "2") {
      filterAcidic();
    }

    console.log(e.target.value);
    console.log(e.target.id);
  };

  ///////////////////////////////////////

  return (
    <div className="app">
      <div className="content">
        <NavBar handleChecked={handleChecked} searchFilter={searchFilter} />

        <Main beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;
