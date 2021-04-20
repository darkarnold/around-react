import React from "react";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="overlay">
          <div className="profile__avatar"></div>
          <div className="overlay__icon-container">
            <div className="overlay__icon" onClick={props.onEditAvatar}></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__info-name">Jacques Cousteau</h1>
            <button
              className="button button_value_edit"
              type="button"
              aria-label="Edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__info-subtitle">Explorer</p>
        </div>
        <button
          className="button button_value_add"
          type="button"
          aria-label="Add"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="places">
        <ul className="places__grid"></ul>
      </section>
    </main>
  );
}

export default Main;
