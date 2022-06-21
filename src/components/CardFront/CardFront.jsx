import React from "react";
import {useState} from "react";
import "./CardFront.scss";

const Card = ({beers}) => {
  const {name, abv, image_url, tagline, first_brewed, description, food_pairing} = beers;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const cardFrontJSX = (
    <div className="card-front__content">
      <img className="card-front__img" src={image_url} alt="" />
      <h3 className="card-front__heading">{name}</h3>
      <h4 className="card-front__tagline">{tagline}</h4>
      <p className="card-front__first-brewed">First Brewed - {first_brewed}</p>
      <p className="card-front__abv">ABV - {abv}</p>
      <button className="card-front__button" onClick={handleClick}>
        Learn More
      </button>
    </div>
  );

  const cardBackJSX = (
    <div className="card-front__content">
      <div className="card-front__description">{description}</div>
      <div>
        <h3 className="card-front__description-heading">Perfect with ...</h3>
        <div>
          {food_pairing.map((food) => (
            <ul>
              <li>{food}</li>
            </ul>
          ))}
        </div>
      </div>
      <button className="card-front__button" onClick={handleClick}>
        Close
      </button>
    </div>
  );

  return <div className="card-front">{showText ? cardBackJSX : cardFrontJSX}</div>;
};

export default Card;
