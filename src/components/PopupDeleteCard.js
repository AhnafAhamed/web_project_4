import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
    constructor({ popupSelector }) {
        super(popupSelector);

        this._form = this._popupElement.querySelector(".popup__form");
    }

    submitForm(action) {
        this._formSubmitHandler = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._formSubmitHandler();
            this.close();
        })
    }
}