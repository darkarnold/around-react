const responseHandler = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.statusText}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // fetch data about the user from server
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(responseHandler);
  }

  // fetch cards from the server
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(responseHandler);
  }

  // edit and update the profile info
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(responseHandler);
  }

  // add new card to server
  setnewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(responseHandler);
  }

  //update profile picture
  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then(responseHandler);
  }

  // resolve server requests and render when requests are complete
  getAppInfo() {
    return Promise.all([this.getUserData(), this.getInitialCards()]);
  }

  /*Delete card from server
  DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId*/
  deleteCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(responseHandler);
  }

  /* Add likes to card
  PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId */
  addLikes(cardId) {
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: "PUT",
      headers: this._headers,
    }).then(responseHandler);
  }

  /* Remove likes from card
  DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId */
  deleteLikes(cardId) {
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(responseHandler);
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-9",
  headers: {
    authorization: "725aa50b-4ab9-470e-b33c-66625663866d",
    "Content-Type": "application/json",
  },
});

export default api;
