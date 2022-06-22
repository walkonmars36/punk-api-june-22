import React from "react";
import {useState} from "react";
import "./Card.scss";

const Card = ({beers}) => {
  const {name, abv, image_url, tagline, first_brewed, description, food_pairing} = beers;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const cardFrontJSX = (
    <div className="card__content">
      <img className="card__img" src={image_url} alt="" />
      <h3 className="card__heading">{name}</h3>
      <h4 className="card__tagline">{tagline}</h4>
      <p className="card__first-brewed">First Brewed - {first_brewed}</p>
      <p className="card__abv">ABV - {abv}</p>
      <button className="card__button" onClick={handleClick}>
        Learn More
      </button>
    </div>
  );

  const cardTextJSX = (
    <div className="card__content">
      <div className="card__description">{description}</div>
      <div>
        <h3 className="card__description-heading">Perfect with ...</h3>
        <ul>
          {food_pairing.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
      <button className="card__button" onClick={handleClick}>
        Close
      </button>
    </div>
  );

  return <div className="card">{showText ? cardTextJSX : cardFrontJSX}</div>;
};

export default Card;
