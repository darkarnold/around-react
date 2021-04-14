function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".overlay__icon")
      .addEventListener(
        "click",
        document
          .querySelector(".popup_type_change-profile-picture")
          .classList.add("popup_opened")
      );
  }

  function handleEditProfileClick() {
    document
      .querySelector(".button_value_edit")
      .addEventListener(
        "click",
        document
          .querySelector(".popup_type_edit-profile")
          .classList.add("popup_opened")
      );
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".button_value_add")
      .addEventListener(
        "click",
        document
          .querySelector(".popup_type_add-place")
          .classList.add("popup_opened")
      );
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="overlay">
          <div className="profile__avatar"></div>
          <div className="overlay__icon-container">
            <div
              className="overlay__icon"
              onClick={handleEditAvatarClick}
            ></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__info-name">Jacques Cousteau</h1>
            <button
              className="button button_value_edit"
              type="button"
              aria-label="Edit"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__info-subtitle">Explorer</p>
        </div>
        <button
          className="button button_value_add"
          type="button"
          aria-label="Add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="places">
        <ul className="places__grid"></ul>
      </section>
    </main>
  );
}

export default Main;
