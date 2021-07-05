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
      this._expandImage();
    })

    document.querySelector(".popup__close-btn-image-expanded").addEventListener("click", () => {
      this._closeExpandedImage();
    })

    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this._closeExpandedImage();
      }
    })

    document.querySelector(".popup_image-expanded").addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_image-expanded")) {
        this._closeExpandedImage();
      }
    })
    
  }

  _toggleLike() {
    this._element.querySelector(".elements__heart-icon").classList.toggle("elements__heart-icon_liked");
  }

  _deleteCard() {
    this._element.remove();
  }

  _expandImage() {
    document.querySelector(".popup_image-expanded").classList.add("popup_open");
    document.querySelector(".image-expanded__image").src = this._url;
    document.querySelector(".image-expanded__title").textContent = this._text;
  }

  _closeExpandedImage() {
    document.querySelector(".popup_image-expanded").classList.remove("popup_open");
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".elements__title").textContent = this._text;
    this._element.querySelector(".elements__image").src = this._url;

    return this._element;
  }
}

export { initialCards, Card}



