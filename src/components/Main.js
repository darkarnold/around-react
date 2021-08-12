import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  // subscribe to currentUser context
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="overlay">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <div className="overlay__icon-container">
            <div className="overlay__icon" onClick={props.onEditAvatar}></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <button
              className="button button_value_edit"
              type="button"
              aria-label="Edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__info-subtitle">{currentUser.about}</p>
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
          {props.cards.map((card, id) => {
            return (
              <Card
                key={id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
