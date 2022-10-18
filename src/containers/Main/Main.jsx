import React from "react";

import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = ({beers}) => {
  return (
    <div className="main">
      <h2 className="main__heading">View All Beers ...</h2>
      <div>
        <CardList beers={beers} />
      </div>
    </div>
  );
};

export default Main;
