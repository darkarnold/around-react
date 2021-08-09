import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  // state variables
  const [name, setName] = useState(" ");
  const [description, setDescription] = useState(" ");
  // subscribe to user context
  const currentUser = React.useContext(CurrentUserContext);
  // load user data from the API
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  // handle submit of data to API
  function handleSubmit(e) {
    //prevent browser from navigating to form address
    e.preventDefault();

    //pass  the value of the managed components to external handler
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      className={`popup popup_type_edit-profile`}
      name="edit-profile"
      title={"Edit Profile"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_val_name"
        id="name-input"
        value={name}
        required
        placeholder="Jacques Costeau"
        minLength="2"
        maxLength="40"
        name="name"
        onChange={handleNameChange}
      />
      <span className="popup__input-error" id="name-input-error"></span>

      <input
        type="text"
        className="popup__input popup__input_val_job"
        id="job-input"
        value={description}
        required
        placeholder="Explorer"
        minLength="2"
        maxLength="200"
        name="description"
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
