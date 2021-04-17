let editBtn = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-btn");
let profileTitle = document.querySelector(".profile__title");
let profileTag = document.querySelector(".profile__tag");
let inputName = document.querySelector(".popup__input_value_name");
let inputAbout = document.querySelector(".popup__input_value_about");
let submitBtn = document.querySelector(".popup__btn");

function popupOpen() {
  popup.classList.add("popup_open");
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileTag.textContent;
}
function popupClose() {
  popup.classList.remove("popup_open");
}
function submitForm(event) {
  profileTitle.textContent = inputName.value;
  profileTag.textContent = inputAbout.value;
  popupClose();
  event.preventDefault();
}

editBtn.addEventListener("click", popupOpen);

closeBtn.addEventListener("click", popupClose);

submitBtn.addEventListener("click", submitForm);
