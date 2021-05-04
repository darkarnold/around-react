import React, { useState, useEffect } from "react";
import avatar from "../images/jacques-cousteau.jpg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  // state variables for username, description and avatar and cards
  const [userName, setUserName] = useState("Jacques Cousteau");
  const [userDescription, setUserDescription] = useState("Explorer");
  const [userAvatar, setUserAvatar] = useState({
    backgroundImage: `url(${avatar})`,
  });
  const [cards, setCards] = useState([]);

  // use effect hook to render user data from api call
  useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  // use effect hook to render card data from api call
  useEffect(() => {
    //render card data from api call
    api
      .getInitialCards()
      .then((res) => {
        const cards = res.map((card) => ({
          id: card._id,
          src: card.link,
          name: card.name,
          likes: card.likes.length,
        }));

        setCards(cards);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="overlay">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <div className="overlay__icon-container">
            <div className="overlay__icon" onClick={props.onEditAvatar}></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__info-name">{userName}</h1>
            <button
              className="button button_value_edit"
              type="button"
              aria-label="Edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button
          className="button button_value_add"
          type="button"
          aria-label="Add"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="places">
        <ul className="places__grid">
          {cards.map((card, id) => {
            return (
              <Card key={id} card={card} onCardClick={props.onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;