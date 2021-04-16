let editBtn = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-btn");
let profileTitle = document.querySelector(".profile__title");
let profileTag = document.querySelector(".profile__tag");
let inputName = document.querySelector(".popup__input_value_name");
let inputAbout = document.querySelector(".popup__input_value_about");
let submitBtn = document.querySelector(".popup__btn");

inputName.value = profileTitle.textContent;
inputAbout.value = profileTag.textContent;

editBtn.addEventListener("click", function () {
  popup.classList.add("popup_open");
});

closeBtn.addEventListener("click", function () {
  popup.classList.remove("popup_open");
});

submitBtn.addEventListener("click", function (event) {
  profileTitle.textContent = inputName.value;
  profileTag.textContent = inputAbout.value;
  popup.classList.remove("popup_open");
  event.preventDefault();
});
