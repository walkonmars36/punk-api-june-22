import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80");

  // Initial api call sets all beers to initial state - beers

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    console.log(url);
  };

  useEffect(() => {
    getBeers(filterBy);
    setFilteredBeers(beers);
  }, [url]);

  const changeUrl = (checkFilter) => {
    if (checkFilter === "classic-range") {
      setUrl("https://api.punkapi.com/v2/beers?page=1&per_page=80&brewed_before=12-2010");
      console.log(checkFilter);
    }
  };

  const handleChecked = (e) => {
    setFilterBy(e.target.value);
    changeUrl(filterBy);
    console.log(e.target.value);
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
