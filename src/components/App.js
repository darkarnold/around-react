import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <aside className="popup popup_type_edit-profile">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_edit-profile"
            name="edit profile"
            novalidate
          >
            <h2 className="popup__title">Edit profile</h2>
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

            <button
              className="button button_value_save"
              type="submit"
              aria-label="Save"
            >
              Save
            </button>
          </form>
          <button
            className="button button_value_close"
            type="button"
            aria-label="Close"
          ></button>
        </div>
      </aside>

      <aside className="popup popup_type_add-place">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_add-place"
            name="new place"
            novalidate
          >
            <h2 className="popup__title">New place</h2>
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

            <button
              className="button button_value_save"
              type="submit"
              aria-label="Save"
            >
              Create
            </button>
          </form>
          <button
            className="button button_value_close"
            type="button"
            aria-label="Close"
          ></button>
        </div>
      </aside>

      <aside className="popup popup_type_display-image">
        <figure className="popup__figure">
          <button
            className="button button_value_close"
            type="button"
            aria-label="Close"
          ></button>
          <img src="#" alt="#" className="popup__image" />
          <figcaption className="popup__image-title"></figcaption>
        </figure>
      </aside>

      <aside className="popup popup_type_confirm-popup">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_confirm-popup"
            name="confirm-popup"
            novalidate
          >
            <h2 className="popup__title">Are you sure?</h2>
            <button
              className="button button_value_save"
              type="submit"
              aria-label="Save"
            >
              Yes
            </button>
          </form>
          <button
            className="button button_value_close"
            type="button"
            aria-label="Close"
          ></button>
        </div>
      </aside>

      <aside className="popup popup_type_change-profile-picture">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_change-profile-picture"
            name="change-profile-picture"
            novalidate
          >
            <h2 className="popup__title">Change profile picture</h2>
            <input
              type="url"
              className="popup__input popup__input_val_url"
              id="url-input-link"
              value=""
              required
              placeholder="Image Link"
              name="image-link"
            />
            <span
              className="popup__input-error"
              id="url-input-link-error"
            ></span>

            <button
              className="button button_value_save"
              type="submit"
              aria-label="Save"
            >
              Save
            </button>
          </form>
          <button
            className="button button_value_close"
            type="button"
            aria-label="Close"
          ></button>
        </div>
      </aside>
    </div>
  );
}

export default App;
