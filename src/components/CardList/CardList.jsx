import React from "react";
import "./CardList.scss";
import CardFront from "../CardFront/CardFront";

const CardList = ({beers}) => {
  return (
    <div className="cardList">
      <div className="cards">
        {beers.map((beers) => (
          <CardFront beers={beers} key={beers.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
