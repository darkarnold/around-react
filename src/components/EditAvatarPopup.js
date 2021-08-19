import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  // assign avatar input to ref
  const avatarInput = useRef(" ");

  // handle data submission to API
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    });

    avatarInput.current.value = " ";
  }

  return (
    <PopupWithForm
      className={`popup popup_type_change-profile-picture`}
      name={"change-profile-picture"}
      title={"Change profile picture"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onCloseOverlay={props.onCloseOverlay}
    >
      <input
        type="url"
        className="popup__input popup__input_val_url"
        id="url-input-link"
        required
        placeholder="Image Link"
        name="image-link"
        ref={avatarInput}
      />
      <span className="popup__input-error" id="url-input-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
