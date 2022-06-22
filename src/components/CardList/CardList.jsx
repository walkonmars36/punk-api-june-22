import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({beers}) => {
  return (
    <div className="cardList">
      <div className="cards">
        {beers.map((beers) => (
          <Card beers={beers} key={beers.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
