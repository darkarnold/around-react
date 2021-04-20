import React from "react";
function ImagePopup() {
  return (
    <aside className="popup popup_type_display-image">
      <figure className="popup__figure">
        <button
          className="button button_value_close"
          type="button"
          aria-label="Close"
        ></button>
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </aside>
  );
}

export default ImagePopup;
