import React from "react";
import "./CardFront.scss";

const Card = ({beers}) => {
  const {name, abv, image_url, tagline, first_brewed} = beers;
  return (
    <div className="card-front">
      <div className="card-front__content">
        <img className="card-front__img" src={image_url} alt="" />
        <p>{name}</p>
        <p>{tagline}</p>
        <p>First Brewed - {first_brewed}</p>
        <p>ABV - {abv}</p>
      </div>
    </div>
  );
};

export default Card;
