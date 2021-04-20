// select page elements
const pageContainer = document.querySelector(".page");

// settings validation object
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_value_save",
  inactiveButtonClass: "button_value_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// profile section
const profile = pageContainer.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");

//popup form section
const editProfilePopupForm = pageContainer.querySelector(
  ".popup__form_type_edit-profile"
);
const addPlacePopupFormSelector = pageContainer.querySelector(
  ".popup__form_type_add-place"
);

const changeProfileAvatarForm = pageContainer.querySelector(
  ".popup__form_type_change-profile-picture"
);

// buttons
const editButton = profileInfo.querySelector(".button_value_edit");
const addPlaceButton = profile.querySelector(".button_value_add");

const updateAvatarButton = pageContainer.querySelector(".overlay__icon");
// select the input fields
const nameFormInput = editProfilePopupForm.querySelector(
  ".popup__input_val_name"
);
const jobFormInput = editProfilePopupForm.querySelector(
  ".popup__input_val_job"
);
// class for image container
const places = ".places__grid";

const placeSelector = document.querySelector(places);

// Card rendering
/*
const initialCards = [
  {
    name: "Paradise Coast",
    link:
      "https://images.unsplash.com/photo-1568634761634-15b7f57c4e7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    alt: "A beautiful sea coast",
  },
  {
    name: "Enchanted Forest",
    link:
      "https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dan-otis-OYFHT4X5isg-unsplash.jpg&w=1920",
    alt: "Mist over a forest",
  },
  {
    name: "Silver Lake",
    link:
      "https://images.unsplash.com/photo-1496434059439-62081cbcfea7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=eberhard-grossgasteiger-tGYMSNV-ooc-unsplash.jpg&w=1920",
    alt: "House by the lake",
  },
  {
    name: "Yosemite Valley",
    link:
      "https://images.unsplash.com/photo-1517578701290-16fa3deb8bd3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q",
    alt: "valley",
  },
  {
    name: "Delos National Park",
    link:
      "https://images.unsplash.com/photo-1595370773791-ccbbfd695ce5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nancy-reid-8XMhTBcQYUo-unsplash.jpg&w=1920",
    alt: "canyon",
  },
  {
    name: "Edge Mountains",
    link:
      "https://images.unsplash.com/photo-1607288610581-5a6334da4cbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "snow peaked mountains",
  },
];
*/
export {
  pageContainer,
  editButton,
  addPlaceButton,
  nameFormInput,
  jobFormInput,
  placeSelector,
  places,
  editProfilePopupForm,
  addPlacePopupFormSelector,
  settings,
  changeProfileAvatarForm,
  updateAvatarButton,
};
