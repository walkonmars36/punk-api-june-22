import {useState, useEffect} from "react";

import "./App.scss";

import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    setFilteredBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

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
    console.log(checkedArr);
  };

  const highAbvClassic = () => {
    const AbvClassic = beers.filter((beer) => beer.abv > 6 && beer.first_brewed.split("/")[1] <= 2009);
    setFilteredBeers(AbvClassic);
  };
  //

  const handleChecked = (e) => {
    const duplicateArr = [...checkedArr];

    let index = duplicateArr.indexOf(e.target.id);

    if (index === -1) {
      duplicateArr.push(e.target.id);
      setCheckedArr(duplicateArr);
    } else {
      duplicateArr.splice(index, 1);
      setCheckedArr(duplicateArr);
    }

    if (duplicateArr.includes("0") && duplicateArr.includes("1")) {
      highAbvClassic();
    }

    if (duplicateArr.includes("0")) {
      filterHighAbv();
    }

    if (duplicateArr.includes("1")) {
      filterClassic();
    }

    if (duplicateArr.includes("2")) {
      filterAcidic();
    }

    if (duplicateArr.length === 0) {
      setFilteredBeers(beers);
    }

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
