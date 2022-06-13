import {useState, useEffect} from "react";

import axios from "axios";
import "./App.scss";

import NavBar from "./containers/NavBar";
import Main from "./containers/Main";

function App() {
  const [beers, setBeers] = useState([]);

  const [filteredBeers, setFilteredBeers] = useState([]);

  // Initial api call sets all beers to initial state - beers

  const API_URL = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setBeers(res.data))

      .catch((err) => {
        console.log(err);
      });
  }, []);

  /// useEffect to mount setfilteredBeers
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
