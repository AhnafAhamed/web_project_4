let editBtn = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupProfile = document.querySelector(".popup_profile");
let popupCard = document.querySelector(".popup_card");
let closeBtnProfile = document.querySelector(".popup__close-btn-profile");
let closeBtnCard = document.querySelector(".popup__close-btn-card");
let profileTitle = document.querySelector(".profile__title");
let profileTag = document.querySelector(".profile__tag");
let cardTitleInput = document.querySelector(".popup__input_place_name");
let cardImageUrlInput = document.querySelector(".popup__input_place_image-url");
let inputName = document.querySelector(".popup__input_value_name");
let inputAbout = document.querySelector(".popup__input_value_about");
let popupFormProfile = document.querySelector(".popup__form_profile");
let popupFormCard = document.querySelector(".popup__form_card");
let addBtn = document.querySelector(".profile__plus-button");
const popupImageExpanded = document.querySelector(".popup_image-expanded");
const closeBtnImageExpanded = document.querySelector(
  ".popup__close-btn-image-expanded"
);
const elements = document.querySelector(".elements");

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

function addCard(titleValue, imageUrlValue) {
  const cardsTemplate = document.querySelector("#cards").content;
  const cardElement = cardsTemplate
    .querySelector(".elements__card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__image");
  const cardTitle = cardElement.querySelector(".elements__title");

  cardImage.src = imageUrlValue;
  cardTitle.textContent = titleValue;
  cardImage.setAttribute("alt", titleValue);

  toggleLike(cardElement);
  deleteCard(cardElement);
  openImage(cardElement);
  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = addCard(item.name, item.link);
  elements.append(cardElement);
});

popupFormCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardElement = addCard(cardTitleInput.value, cardImageUrlInput.value);
  elements.prepend(cardElement);
  popupCloseCard();
});

function popupProfileOpen() {
  popupProfile.classList.add("popup_open");
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileTag.textContent;
}

function popupCardOpen() {
  popupCard.classList.add("popup_open");
  cardTitleInput.value = "";
  cardImageUrlInput.value = "";
}

function popupImageExpandedOpen() {
  popupImageExpanded.classList.add("popup_open");
}

function popupImageExpandedClose() {
  popupImageExpanded.classList.remove("popup_open");
}

function popupCloseProfile() {
  popupProfile.classList.remove("popup_open");
}

function popupCloseCard() {
  popupCard.classList.remove("popup_open");
}

function submitFormProfile(event) {
  profileTitle.textContent = inputName.value;
  profileTag.textContent = inputAbout.value;
  popupCloseProfile();
  event.preventDefault();
}

function toggleLike(cardElement) {
  const likeBtn = cardElement.querySelector(".elements__heart-icon");

  likeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__heart-icon_liked");
  });
}

function deleteCard(cardElement) {
  const deleteBtn = cardElement.querySelector(".elements__delete-icon");

  deleteBtn.addEventListener("click", function (evt) {
    evt.target.closest(".elements__card").remove();
  });
}

function openImage(cardElement) {
  const elementCardImage = cardElement.querySelector(".elements__image");
  const elementCardTitle = cardElement.querySelector(".elements__title");
  const modalImage = document.querySelector(".image-expanded__image");
  const modalImageTitle = document.querySelector(".image-expanded__title");

  elementCardImage.addEventListener("click", function () {
    modalImage.src = elementCardImage.src;
    modalImageTitle.textContent = elementCardTitle.textContent;
    popupImageExpandedOpen();
  });
}

editBtn.addEventListener("click", popupProfileOpen);

closeBtnProfile.addEventListener("click", popupCloseProfile);

closeBtnCard.addEventListener("click", popupCloseCard);

popupFormProfile.addEventListener("submit", submitFormProfile);

addBtn.addEventListener("click", popupCardOpen);

closeBtnImageExpanded.addEventListener("click", popupImageExpandedClose);
