import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // subscribe to currentUser context
  const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = props.card._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `place__delete-icon ${
    isOwn ? " " : "place_delete-icon_disabled"
  }`;
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="place">
      <button
        className={cardDeleteButtonClassName}
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
