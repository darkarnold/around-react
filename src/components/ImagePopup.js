import React from "react";
function ImagePopup(props) {
  return (
    <aside
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onClose}
    >
      <figure className="popup__figure">
        <button
          className="button button_value_close"
          type="button"
          aria-label="Close"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <figcaption className="popup__image-title">
          {props.card.name}
        </figcaption>
      </figure>
    </aside>
  );
}

export default ImagePopup;
