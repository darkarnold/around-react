import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // state variable and useState Hooks for popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  // state variabble for selected card and useState Hook
  const [selectedCard, setSelectedCard] = useState([]);

  function handleCardClick() {
    setSelectedCard(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        className={`popup popup_type_edit-profile`}
        name={"edit profile"}
        title={"Edit Profile"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_val_name"
          id="name-input"
          value=""
          required
          placeholder="Jacques Costeau"
          minlength="2"
          maxlength="40"
          name="name"
        />
        <span className="popup__input-error" id="name-input-error"></span>

        <input
          type="text"
          className="popup__input popup__input_val_job"
          id="job-input"
          value=""
          required
          placeholder="Explorer"
          minlength="2"
          maxlength="200"
          name="description"
        />
        <span className="popup__input-error" id="job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        className={`popup popup_type_add-place`}
        name={"new place"}
        title={"New place"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_val_title"
          id="title-input"
          value=""
          required
          placeholder="Title"
          minlength="1"
          maxlength="30"
          name="image-text"
        />
        <span className="popup__input-error" id="title-input-error"></span>

        <input
          type="url"
          className="popup__input popup__input_val_link"
          id="url-input"
          value=""
          required
          placeholder="Image Link"
          name="image-link"
        />
        <span className="popup__input-error" id="url-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        className={`popup popup_type_change-profile-picture`}
        name={"change-profile-picture"}
        title={"Change profile picture"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input popup__input_val_url"
          id="url-input-link"
          value=""
          required
          placeholder="Image Link"
          name="image-link"
        />
        <span className="popup__input-error" id="url-input-link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        className={"popup popup_type_confirm-popup"}
        name={"confirm-popup"}
        title={"Are you sure ?"}
      />

      <ImagePopup
        isOpen={selectedCard}
        onClose={closeAllPopups}
        className={"popup popup_type_display-image"}
      />
    </div>
  );
}

export default App;
