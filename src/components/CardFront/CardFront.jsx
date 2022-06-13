import React from "react";
import "./CardFront.scss";

const Card = ({beers}) => {
  // When destructuring, had to give props a default of {}, otherwise I was getting property undefined and page woudn't load
  const {name, description, abv, image_url} = beers || {};
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
