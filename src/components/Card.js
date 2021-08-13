import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // subscribe to currentUser context
  const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `place__delete-icon ${
    isOwn ? " " : "place__delete-icon_disabled "
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `place__like-icon ${
    isLiked ? "place__like-icon_active" : "place__like-icon"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  // handle Card likes
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  // handle Card delete
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="place">
      <button
        className={cardDeleteButtonClassName}
        aria-label="Delete"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__name-container">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place_like-container">
          <button
            className={cardLikeButtonClassName}
            aria-label="Like"
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="place__like-icon_count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
