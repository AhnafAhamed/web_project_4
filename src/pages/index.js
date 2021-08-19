import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
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
  popupAvatarForm,
  popupDeleteConfirmationCard
} from "../utils/constants.js";

/*----------------------- Initializing Api Class --------------------*/

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "4bb4f649-ce49-4e5f-81c2-ac119aac9e7d",
    "Content-Type": "application/json",
  }
});

/*----------------------- Rendering Data from Api --------------------*/

const initialProfileInfo = api.renderUserInfo();
const initialCards = api.renderCard();

Promise.all([initialProfileInfo, initialCards])
  .then(([userData, cards]) => {
    cardList.renderItems(cards.reverse());
    user.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  })


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
      },
      userData: user.getUserId(),
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


// enabling image popup
const popupImage = new PopupWithImage(popupImageExpanded);
popupImage.setEventListeners();

// enabling delete popup
const popupDelete = new PopupDeleteCard({
  popupSelector:popupDeleteConfirmationCard,
  formSubmitHandler: (cardElement, cardId) => {
    api.deleteCard(cardId).then(() => {
      cardElement.remove();
      popupDelete.close();
    }).catch((err) => {
      console.log(`Error: ${err}`);
    })
  }
});
popupDelete.setEventListeners();

//adding image card to the page
const imageCardFormPopup = new PopupWithForm({
  popupSelector: popupCard,
  formSubmitHandler: (data) => {
    api.sendCard(data)
    .then( cardData => {
      const newCard = createCard(cardData);
      cardList.addItem(newCard.generateCard());
    }).then(() => {
      imageCardFormPopup.close();
    }).catch((err) => {
      console.log(`Error: ${err}`);
    })
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
  avatarElement: profileAvatarImage
});


const userInfoPopupForm = new PopupWithForm({
  popupSelector: popupProfile,
  formSubmitHandler: (data) => {
    api.sendUserInfo(data)
    .then((data) => {
      user.setUserInfo(data);
      userInfoPopupForm.close();
    }).catch((err) => {
      console.log(`Error: ${err}`);
    });
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

const avatarUpdateForm = new PopupWithForm({
  popupSelector: avatarImage,
  formSubmitHandler: (data) => {
    api.sendAvatar(data)
    .then((data) => {
      user.setAvatarImg(data);
      avatarUpdateForm.close(data);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    })
  }
})

const avatarFormValidator = new FormValidator(formSettings, popupAvatarForm);
avatarFormValidator.enableValidation();
avatarEditBtn.addEventListener("click", () => {
  avatarUpdateForm.open();
})

avatarUpdateForm.setEventListeners();
