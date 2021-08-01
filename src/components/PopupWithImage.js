import Popup from "./Popup.js";

export  default class PopupWithImage extends Popup {
    open( { link, name } ) {
        this._expadedImage = this._popupElement.querySelector('.image-expanded__image');
        this._expandedImageTitle = this._popupElement.querySelector('.image-expanded__title');
        this._expadedImage.src = link;
        this._expadedImage.alt = name;
        this._expandedImageTitle.textContent = name;
        super.open();
    }
}