import React from "react";
import "./CardFront.scss";

const Card = ({beers}) => {
  const {name, abv, image_url} = beers;
  return (
    <div className="cardFront">
      <div className="beerDisplay">
        <img src={image_url} alt="" />
        <p>{name}</p>
        <p>{abv}</p>
      </div>
    </div>
  );
};

export default Card;
