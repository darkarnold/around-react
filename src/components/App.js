import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  // state variable and useState Hooks for popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  // state variabble for selected card and useState Hook
  const [selectedCard, setSelectedCard] = useState({});

  //state variable for currentUser
  const [currentUser, setCurrentUser] = useState({});

  // mount the currentUser using useEffect hook to render User data from api call
  useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  const [cards, setCards] = useState([]);

  // use effect hook to render card data from api call
  useEffect(() => {
    //render card data from api call
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  // handle card likes
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
        //console.log(newCard);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  // handle card delete
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => (c._id !== card._id ? c : null));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
    setIsImagePopupOpen(true);
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
    setSelectedCard({});
    setIsImagePopupOpen(false);
  }

  function closeByOverlay(event) {
    if (event.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsEditProfilePopupOpen(false);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar({ avatar })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsEditAvatarPopupOpen(false);
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .setnewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsAddPlacePopupOpen(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          onCloseOverlay={closeByOverlay}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onCloseOverlay={closeByOverlay}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onCloseOverlay={closeByOverlay}
        />

        <PopupWithForm
          className={"popup popup_type_confirm-popup"}
          name={"confirm-popup"}
          title={"Are you sure ?"}
        />

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
          className={"popup popup_type_display-image"}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
