import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import UserAvatar from "../components/UserAvatar.js";
import Section from "../components/Section.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import Api from "../components/Api.js";
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
  cardsContainer,
  profileName,
  profileTitle,
  formSettings,
  avatarEditBtn,
  avatarImage,
  profileAvatarImage,
  avatarUrlInput,
  popupAvatarForm,
  popupDeleteConfirmationCard
} from "../utils/constants.js";

/*----------------------- Initializing Api Class --------------------*/

const api = new Api();

/*----------------------- Adding and Updating Cards --------------------*/


const createCard = (data) => {
  const cardInstance = new Card(
    {
      data,
      handleCardClick: () => {
        popupImage.open(data);
      },
      handleDeleteClick: (evt) => {
        popupDelete.open(evt, data._id);
        popupDelete.submitForm(() => {
          cardInstance.deleteCard();
        })
      },
      userData: api.renderUserInfo().then((data) => {
        console.log(data)
        return data.json;
      }),
      handleCardLike: status => {
        return status ? api.likeCard(data._id) : api.removeCardLike(data._id);
      }
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

api.renderCard().then((data) => {
  cardList.renderItems(data);
})

// enabling image popup
const popupImage = new PopupWithImage(popupImageExpanded);
popupImage.setEventListeners();

// enabling delete popup
const popupDelete = new PopupDeleteCard({
  popupSelector:popupDeleteConfirmationCard
});
popupDelete.setEventListeners();

//adding image card to the page
const imageCardFormPopup = new PopupWithForm({
  popupSelector: popupCard,
  formSubmitHandler: (data) => {
    api.sendCard(data);
  },
});

imageCardFormPopup.setEventListeners();

const cardFormValidator = new FormValidator(formSettings, popupFormCard);

cardFormValidator.enableValidation();

cardAddBtn.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  imageCardFormPopup.open();
});



/*----------------------- Adding and Updating User Info --------------------*/

// adding user info "Name" and "title" to the page
const user = new UserInfo({
  nameElement: profileName,
  titleElement: profileTitle,
});

api.renderUserInfo().then((data) => {
  user.setUserInfo(data);
})

const userInfoPopupForm = new PopupWithForm({
  popupSelector: popupProfile,
  formSubmitHandler: (data) => {
    api.sendUserInfo(data);
  },
});
userInfoPopupForm.setEventListeners();

const profileFormValidator = new FormValidator(formSettings, popupFormProfile);
profileFormValidator.enableValidation();

profileEditBtn.addEventListener("click", () => {
  const profileData = user.getUserInfo();
  profileNameInput.value = profileData.name;
  profileTitleInput.value = profileData.title;

  profileFormValidator.resetValidation();
  userInfoPopupForm.open();
});

/*----------------------- Avatar Update--------------------*/

const avatar = new UserAvatar({
  avatarElement: profileAvatarImage
})

const avatarUpdateForm = new PopupWithForm({
  popupSelector: avatarImage,
  formSubmitHandler: (data) => {
    api.sendAvatar(data);
  }
})

const avatarFormValidator = new FormValidator(formSettings, popupAvatarForm);
avatarFormValidator.enableValidation();
avatarEditBtn.addEventListener("click", () => {
  const getAvatar = avatar.getUserAvatar();
  avatarUrlInput.value = getAvatar.avatar;
  avatarUpdateForm.open();
})

avatarUpdateForm.setEventListeners();

api.renderAvatar().then((data) => {
  avatar.setUserAvatar(data);
})
