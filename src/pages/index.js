import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  cardAddBtn,
  popupFormCard,
  popupCard,
  popupFormProfile,
  profileNameInput,
  profileTitleInput,
  profileEditBtn,
  popupProfile,
  cardTemplate,
  popupImageExpanded,
  initialCards,
  cardsContainer,
  profileName,
  profileTitle,
  formSettings,
} from "../utils/constants.js";

// adding the cards to the page
const createCard = (data) => {
  const cardInstance = new Card(
    {
      data,
      handleCardClick: () => {
        popupImage.open(data);
      },
    },
    cardTemplate
  );
  return cardInstance;
};

const cardList = new Section(
  {
    renderer: (data) => {
      const newCard = createCard(data);
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardList.renderItems(initialCards);

// enabling image popup
const popupImage = new PopupWithImage(popupImageExpanded);
popupImage.setEventListeners();

// adding user info "Name" and "title" to the page
const user = new UserInfo({
  nameElement: profileName,
  titleElement: profileTitle,
});

profileEditBtn.addEventListener("click", () => {
  const profileData = user.getUserInfo();
  profileNameInput.value = profileData.name;
  profileTitleInput.value = profileData.title;

  profileFormValidator.resetValidation();
  userInfoPopupForm.open();
});

const userInfoPopupForm = new PopupWithForm({
  popupSelector: popupProfile,
  formSubmitHandler: (data) => {
    user.setUserInfo(data);
  },
});

const profileFormValidator = new FormValidator(formSettings, popupFormProfile);
profileFormValidator.enableValidation();
userInfoPopupForm.setEventListeners();

//adding image card to the page
const imageCardFormPopup = new PopupWithForm({
  popupSelector: popupCard,
  formSubmitHandler: (data) => {
    const newCard = createCard(data);
    cardList.addItem(newCard.generateCard());
  },
});

const cardFormValidator = new FormValidator(formSettings, popupFormCard);

cardFormValidator.enableValidation();

imageCardFormPopup.setEventListeners();

cardAddBtn.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  imageCardFormPopup.open();
});
