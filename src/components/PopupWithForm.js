import React from "react";
function PopupWithForm(props) {
  return (
    <aside
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onClose}
    >
      <div className="popup__container">
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          //noValidate
          onSubmit={props.onSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}

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
          onClick={props.onClose}
        ></button>
      </div>
    </aside>
  );
}

export default PopupWithForm;
