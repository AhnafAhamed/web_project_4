import { initialCards, Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const elements = document.querySelector(".elements");
const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const popupCard = document.querySelector(".popup_card");
const editBtn = document.querySelector(".profile__edit-button");
const inputName = document.querySelector(".popup__input_value_name");
const inputAbout = document.querySelector(".popup__input_value_about");
const popupProfileBtn = document.querySelector(".popup__btn-profile");
const profileTitle = document.querySelector(".profile__title");
const profileTag = document.querySelector(".profile__tag");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormCard = document.querySelector(".popup__form_card");
const popupImageExpanded = document.querySelector(".popup_image-expanded");
const closeBtnProfile = document.querySelector(".popup__close-btn-profile");
const closeBtnCard = document.querySelector(".popup__close-btn-card");
const closeBtnImageExpanded = document.querySelector(".popup__close-btn-image-expanded");
const addBtn = document.querySelector(".profile__plus-button");
const cardTitleInput = document.querySelector(".popup__input_place_name");
const expandedImage = document.querySelector(".image-expanded__image");
const expandedImageTitle = document.querySelector(".image-expanded__title");
const cardImageUrlInput = document.querySelector(
  ".popup__input_place_image-url"
);

function createNewCard(cards, cardContainer) {
  const newCard = new Card(cards, cardContainer);
  const newCardElement = newCard.generateCard();
  elements.prepend(newCardElement);
}

initialCards.forEach((item) => {
  createNewCard(item, "#cards");
});

function openPopup(popupElement) {
  popupElement.classList.add("popup_open");
  document.addEventListener("keydown", closeOnEscape);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_open");
  document.removeEventListener("keydown", closeOnEscape);
}

function popupProfileOpen() {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileTag.textContent;
  validateFormProfile.resetValidation();
  openPopup(popupProfile);
}

function popupCardOpen() {
  cardTitleInput.value = "";
  cardImageUrlInput.value = "";
  validateFormCard.resetValidation();
  openPopup(popupCard);
}

function expandImage(url, text) {
  expandedImage.src = url;
  expandedImageTitle.textContent = text;
  openPopup(popupImageExpanded);
}



function submitFormProfile(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileTag.textContent = inputAbout.value;
  closePopup(popupProfile);
}

function closeOnEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_open"));
  }
}

popups.forEach((element) => {
  element.addEventListener("click", (evt) => {
    closePopup(evt.target);
  });
});

editBtn.addEventListener("click", popupProfileOpen);

addBtn.addEventListener("click", popupCardOpen);

popupFormProfile.addEventListener("submit", submitFormProfile);

closeBtnProfile.addEventListener("click", () => {
  closePopup(popupProfile);
});

closeBtnCard.addEventListener("click", function () {
  closePopup(popupCard);
});

closeBtnImageExpanded.addEventListener("click", function () {
  closePopup(popupImageExpanded);
});

popupFormCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const items = {
    name: cardTitleInput.value,
    link: cardImageUrlInput.value,
  };
  createNewCard(items, "#cards");
  closePopup(popupCard);
});


const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const validateFormCard = new FormValidator(settings, ".popup__form_card");
validateFormCard.enableValidation();


const validateFormProfile = new FormValidator(settings, ".popup__form_profile");
validateFormProfile.enableValidation();

export {expandImage}