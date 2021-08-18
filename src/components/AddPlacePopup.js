import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  // state variables
  const [title, setTitle] = useState(" ");
  const [imageLink, setImageLink] = useState(" ");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleImageLinkChange(e) {
    setImageLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlaceSubmit({
      name: title,
      link: imageLink,
    });

    setTitle(" ");
    setImageLink(" ");
  }

  return (
    <PopupWithForm
      className={`popup popup_type_add-place`}
      name={"new-place"}
      title={"New place"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_val_title"
        id="title-input"
        value={title}
        required
        placeholder="Title"
        minLength="1"
        maxLength="30"
        name="image-text"
        onChange={handleTitleChange}
      />
      <span className="popup__input-error" id="title-input-error"></span>

      <input
        type="url"
        className="popup__input popup__input_val_link"
        id="url-input"
        value={imageLink}
        required
        placeholder="Image Link"
        name="image-link"
        onChange={handleImageLinkChange}
      />
      <span className="popup__input-error" id="url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
