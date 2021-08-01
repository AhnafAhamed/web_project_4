export default class Popup{
    constructor(popupSelector){
        this._popupElement = document.querySelector(`.${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    _handleEscClose(evt) {
        evt.preventDefault();
    
        if(evt.key === "Escape") {
            this.close()
        }
    }

    _handleOverlayClose(evt) {
        if(evt.target.classList.contains("popup_open")) {
            this.close();
        }
    }

    open(){
        this._popupElement.classList.add("popup_open");
        document.addEventListener('keyup', this._handleEscClose);
        document.addEventListener('click', this._handleOverlayClose);

    }

    close() {
        this._popupElement.classList.remove("popup_open")
        document.removeEventListener('keyup', this._handleEscClose);
        document.removeEventListener('click', this._handleOverlayClose);
    }

    setEventListeners() {
        const closeButton = this._popupElement.querySelector(".popup__close-btn");
        closeButton.addEventListener("click", () => {
            this.close();
        })

        this._popupElement.addEventListener('click' , (evt) => {
            if (evt.target.classList.contains('popup_open')){
                this.close()
            }
        })
    }
}