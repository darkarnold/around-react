import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="place">
      <button
        className="place__delete-icon"
        aria-label="Delete"
        type="button"
      ></button>
      <img
        src={props.card.src}
        alt={props.card.name}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__name-container">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place_like-container">
          <button
            className="place__like-icon"
            aria-label="Like"
            type="button"
          ></button>
          <p className="place__like-icon_count">{props.card.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
