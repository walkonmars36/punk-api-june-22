import React from "react";

import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = ({beers}) => {
  return (
    <div className="main">
      <div>
        <CardList beers={beers} />
      </div>
    </div>
  );
};

export default Main;
