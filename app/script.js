const editBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const popupCard = document.querySelector(".popup_card");
const closeBtnProfile = document.querySelector(".popup__close-btn-profile");
const closeBtnCard = document.querySelector(".popup__close-btn-card");
const profileTitle = document.querySelector(".profile__title");
const profileTag = document.querySelector(".profile__tag");
const cardTitleInput = document.querySelector(".popup__input_place_name");
const cardImageUrlInput = document.querySelector(
  ".popup__input_place_image-url"
);
const inputName = document.querySelector(".popup__input_value_name");
const inputAbout = document.querySelector(".popup__input_value_about");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormCard = document.querySelector(".popup__form_card");
const addBtn = document.querySelector(".profile__plus-button");
const popupImageExpanded = document.querySelector(".popup_image-expanded");
const closeBtnImageExpanded = document.querySelector(
  ".popup__close-btn-image-expanded"
);
const elements = document.querySelector(".elements");
const popupProfileBtn = document.querySelector(".popup__btn-profile");

function openPopup(popupElement) { //parameter
  popupElement.classList.add("popup_open");
  document.addEventListener('keydown', closeOnEscape);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_open");
  document.removeEventListener('keydown', closeOnEscape);
}

function addCard(titleValue, imageUrlValue) {
  const cardsTemplate = document.querySelector("#cards").content; //Selecting the template 
  const cardElement = cardsTemplate
    .querySelector(".elements__card")
    .cloneNode(true); // Cloning the li element to the dom
    
  const cardImage = cardElement.querySelector(".elements__image");
  const cardTitle = cardElement.querySelector(".elements__title");

  cardImage.src = imageUrlValue;
  cardTitle.textContent = titleValue;
  cardImage.setAttribute("alt", titleValue);

  toggleLike(cardElement);
  deleteCard(cardElement);
  openImage(cardElement);

  return cardElement;
};

initialCards.forEach((item) => {
  const cardElement = addCard(item.name, item.link);
  elements.append(cardElement);
});

popupFormCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardElement = addCard(cardTitleInput.value, cardImageUrlInput.value);
  elements.prepend(cardElement);
  closePopup(popupCard);
});

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

function popupImageExpandedClose() {
  closePopup(popupImageExpanded);
}

function popupCloseProfile() {
  closePopup(popupProfile);
}

function popupCloseCard() {
  closePopup(popupCard);
}

function submitFormProfile(event) {
  profileTitle.textContent = inputName.value;
  profileTag.textContent = inputAbout.value;
  closePopup(popupProfile);
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
    modalImage.alt = elementCardImage.alt;
    modalImageTitle.textContent = elementCardTitle.textContent;
    openPopup(popupImageExpanded);
  });
}

editBtn.addEventListener("click", popupProfileOpen);

closeBtnProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});

closeBtnCard.addEventListener("click", function () {
  closePopup(popupCard);
});

popupFormProfile.addEventListener("submit", submitFormProfile);

addBtn.addEventListener("click", popupCardOpen);

closeBtnImageExpanded.addEventListener("click", function () {
  closePopup(popupImageExpanded);
});

function closeOnEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_open'));
  }
};


popup.forEach(element => {
  element.addEventListener("click", evt => {
    closePopup(evt.target);
  });
});