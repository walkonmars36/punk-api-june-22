import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);

  const [filteredBeers, setFilteredBeers] = useState([]);

  // Initial api call sets all beers to initial state - beers

  const getBeers = async () => {
    const API_URL = "https://api.punkapi.com/v2/beers";
    let url = API_URL;

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  /// useEffect to mount setFilteredBeers
  useEffect(() => {
    setFilteredBeers(beers);
  }, [beers]);

  return (
    <div className="app">
      <div className="content">
        <NavBar beers={beers} setFilteredBeers={setFilteredBeers} />

        <Main beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;

// lastBeers={lastBeers} nextBeers={nextBeers}

// map helper function option
// const getBeers = (beers) => <Main beer={beers}/>
// in jsx
// {beers.map(getBeers)}
