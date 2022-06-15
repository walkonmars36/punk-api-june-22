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
    console.log(url);
  };

  useEffect(() => {
    getBeers();
  }, []);

  //////////////////////////////////

  useEffect(() => {
    setSearchBeers(beers);
  }, [beers]);

  ////////////////////////////

  const searchFilter = (event) => {
    if (event.target.value) {
      const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(event.target.value));
      setSearchBeers(searchBeers);
    } else {
      setSearchBeers(beers);
    }
  };

  /////////////////////////

  const handleChecked = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="app">
      <div className="content">
        <NavBar handleChecked={handleChecked} searchFilter={searchFilter} filterBy={filterBy} />

        <Main beers={searchBeers} />
      </div>
    </div>
  );
}

export default App;
