import React from "react";
import "./CardFront.scss";

const Card = ({beers}) => {
  const {name, abv, image_url, tagline, first_brewed} = beers;
  return (
    <div className="card-front">
      <div className="card-front__content">
        <img className="card-front__img" src={image_url} alt="" />
        <h3 className="card-front__heading">{name}</h3>
        <h4 className="card-front__tagline">{tagline}</h4>
        <p className="card-front__first-brewed">First Brewed - {first_brewed}</p>
        <p className="card-front__abv">ABV - {abv}</p>
      </div>
    </div>
  );
};

export default Card;
