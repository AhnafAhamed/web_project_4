import { expandImage } from "./index.js"

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

class Card {
  constructor(data,cardSelector) {
    this._cardSelector = cardSelector;
    this._text = data.name;
    this._url = data.link;
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
      this._deleteCard();
    })

    this._element.querySelector(".elements__image").addEventListener("click", () => {
      expandImage(this._url, this._text);
    })
    
  }

  _toggleLike() {
    this._element.querySelector(".elements__heart-icon").classList.toggle("elements__heart-icon_liked");
  }

  _deleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".elements__title").textContent = this._text;
    this._element.querySelector(".elements__image").src = this._url;
    this._element.querySelector(".elements__image").alt = this._text;

    return this._element;
  }
}

export { initialCards, Card}



