import React from "react";

function Card({ src, name, likes }) {
  return (
    <li className="place">
      <button
        className="place__delete-icon"
        aria-label="Delete"
        type="button"
      ></button>
      <img src={src} alt="#" className="place__image" />
      <div className="place__name-container">
        <h2 className="place__name">{name}</h2>
        <div className="place_like-container">
          <button
            className="place__like-icon"
            aria-label="Like"
            type="button"
          ></button>
          <p className="place__like-icon_count">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
