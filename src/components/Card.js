export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick }, cardSelector) {
        this._text = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(true);
    
        this._element = cardElement;
    }

    _setEventListeners() {
        this._element.querySelector(".elements__heart-icon").addEventListener("click", () => {
          this._toggleLike();
        })
    
        this._element.querySelector(".elements__delete-icon").addEventListener("click", () => {
          this._handleDeleteClick();
        })
    
        this._element.querySelector(".elements__image").addEventListener("click", () => {
          this._handleCardClick()
        })
        
      }
    
    _toggleLike() {
        this._element.querySelector(".elements__heart-icon").classList.toggle("elements__heart-icon_liked");
    }
    
    deleteCard() {
        this._element.remove();
    }
    
    generateCard() {
        this._getTemplate();
        this._setEventListeners();
    
        this._element.querySelector(".elements__title").textContent = this._text;
        this._element.querySelector(".elements__image").src = this._link;
        this._element.querySelector(".elements__image").alt = this._text;
    
        return this._element;
    }
}