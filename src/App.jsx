import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [filterBy, setFilterBy] = useState("all");

  // Initial api call sets all beers to initial state - beers

  const getBeers = async (checkFilter) => {
    let url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

    if (checkFilter !== "all") {
      url += `&brewed_before=12-2010`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers(filterBy);
  }, [filterBy]);

  /// useEffect to mount setFilteredBeers
  useEffect(() => {
    setFilteredBeers(beers);
  }, [beers]);

  const handleChecked = (e) => {
    console.log(beers);
    setFilterBy(e.target.value);
    console.log(filterBy);
    console.log(beers);
  };

  return (
    <div className="app">
      <div className="content">
        <NavBar beers={beers} setFilteredBeers={setFilteredBeers} handleChecked={handleChecked} filterBy={filterBy} />

        <Main beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;
