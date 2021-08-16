import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
    constructor({ popupSelector, formSubmitHandler }) {
        super(popupSelector);

        this._form = this._popupElement.querySelector(".popup__form");
        this._button = this._popupElement.querySelector(".popup__btn_confirmation-delete");
        this._formSubmitHandler = formSubmitHandler;
    }

    open(evt, cardId) {
        super.open();
        this._button.textContent = 'Yes';
        this._cardId = cardId;
        this._card = evt.target.parentElement;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._button.textContent = 'Deleting...';
            this._formSubmitHandler(this._card, this._cardId);
            // this.close();
        })
    }
}