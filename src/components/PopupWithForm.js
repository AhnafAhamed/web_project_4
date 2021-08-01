import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmitHandler }){
        super(popupSelector);

        this._form = this._popupElement.querySelector(".popup__form");
        this._formSubmitHandler = formSubmitHandler;
    }

    _getInputValues() {
        this._inputItems = Array.from(this._popupElement.querySelectorAll('.popup__input'));
        this._inputValues = {};
        this._inputItems.forEach((input) => {
            this._inputValues[input.name] = input.value;

        });
        return this._inputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._formSubmitHandler(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        this._form.reset();

        super.close();
    }

    
}