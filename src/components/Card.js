import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  console.log(handleClick);
  return (
    <li className="place" onClick={handleClick}>
      <button
        className="place__delete-icon"
        aria-label="Delete"
        type="button"
      ></button>
      <img src={props.src} alt="#" className="place__image" />
      <div className="place__name-container">
        <h2 className="place__name">{props.name}</h2>
        <div className="place_like-container">
          <button
            className="place__like-icon"
            aria-label="Like"
            type="button"
          ></button>
          <p className="place__like-icon_count">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
