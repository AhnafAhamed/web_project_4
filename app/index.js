import { initialCards, Card } from "./card.js";
import { FormValidator } from "./formValidator.js";

initialCards.forEach((item) => {
  const card = new Card(item, "#cards");

  const cardElement = card.generateCard();

  document.querySelector(".elements").append(cardElement);
});

const popup = document.querySelectorAll(".popup");
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
const closeBtnProfile = document.querySelector(".popup__close-btn-profile");
const closeBtnCard = document.querySelector(".popup__close-btn-card");
const addBtn = document.querySelector(".profile__plus-button");
const cardTitleInput = document.querySelector(".popup__input_place_name");
const cardImageUrlInput = document.querySelector(
  ".popup__input_place_image-url"
);

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
  popupProfileBtn.disabled = false;
  popupProfileBtn.classList.remove("popup__btn_inactive");
  openPopup(popupProfile);
}

function popupCardOpen() {
  cardTitleInput.value = "";
  cardImageUrlInput.value = "";
  openPopup(popupCard);
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

popup.forEach((element) => {
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

popupFormCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const items = {
    name: cardTitleInput.value,
    link: cardImageUrlInput.value
  };
  const newCard = new Card(items, "#cards");
  const newCardElement = newCard.generateCard();
  document.querySelector(".elements").append(newCardElement);
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

const validateForm = new FormValidator(settings);
validateForm.enableValidation();