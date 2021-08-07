/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._text = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(true);
      this._element = cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".elements__heart-icon").addEventListener("click", function () {
        _this._toggleLike();
      });

      this._element.querySelector(".elements__delete-icon").addEventListener("click", function () {
        _this._deleteCard();
      });

      this._element.querySelector(".elements__image").addEventListener("click", function () {
        _this._handleCardClick();
      });
    }
  }, {
    key: "_toggleLike",
    value: function _toggleLike() {
      this._element.querySelector(".elements__heart-icon").classList.toggle("elements__heart-icon_liked");
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._element.remove();
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._getTemplate();

      this._setEventListeners();

      this._element.querySelector(".elements__title").textContent = this._text;
      this._element.querySelector(".elements__image").src = this._link;
      this._element.querySelector(".elements__image").alt = this._text;
      return this._element;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._formElement = document.querySelector(formElement);
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(formElement, inputElement, errorMessage) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formElement, inputElement) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_isValid",
    value: function _isValid(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "_eventListeners",
    value: function _eventListeners(formElement) {
      var _this = this;

      var inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      var buttonElement = formElement.querySelector(this._submitButtonSelector);

      this._toggleButtonState(inputList, buttonElement);

      inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._isValid(formElement, inputElement);

          _this._toggleButtonState(inputList, buttonElement);
        });
      });
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      var inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

      var buttonElement = this._formElement.querySelector(this._submitButtonSelector);

      this._toggleButtonState(inputList, buttonElement);

      inputList.forEach(function (inputElement) {
        _this2._hideInputError(_this2._formElement, inputElement);
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._eventListeners(this._formElement);
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(".".concat(popupSelector));
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      evt.preventDefault();

      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "_handleOverlayClose",
    value: function _handleOverlayClose(evt) {
      if (evt.target.classList.contains("popup_open")) {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add("popup_open");

      document.addEventListener('keyup', this._handleEscClose);
      document.addEventListener('click', this._handleOverlayClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("popup_open");

      document.removeEventListener('keyup', this._handleEscClose);
      document.removeEventListener('click', this._handleOverlayClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      var closeButton = this._popupElement.querySelector(".popup__close-btn");

      closeButton.addEventListener("click", function () {
        _this.close();
      });

      this._popupElement.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_open')) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        formSubmitHandler = _ref.formSubmitHandler;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popupElement.querySelector(".popup__form");
    _this._formSubmitHandler = formSubmitHandler;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputItems = Array.from(this._popupElement.querySelectorAll('.popup__input'));
      this._inputValues = {};

      this._inputItems.forEach(function (input) {
        _this2._inputValues[input.name] = input.value;
      });

      return this._inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._formSubmitHandler(_this3._getInputValues());

        _this3.close();
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage() {
    _classCallCheck(this, PopupWithImage);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var link = _ref.link,
          name = _ref.name;
      this._expadedImage = this._popupElement.querySelector('.image-expanded__image');
      this._expandedImageTitle = this._popupElement.querySelector('.image-expanded__title');
      this._expadedImage.src = link;
      this._expadedImage.alt = name;
      this._expandedImageTitle.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(".".concat(containerSelector));
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameElement = _ref.nameElement,
        titleElement = _ref.titleElement;

    _classCallCheck(this, UserInfo);

    this._nameElement = nameElement;
    this._titleElement = titleElement;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this.userData = {
        name: this._nameElement.textContent,
        title: this._titleElement.textContent
      };
      return this.userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._nameElement.textContent = data.name;
      this._titleElement.textContent = data.title;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsContainer": () => (/* binding */ cardsContainer),
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "profileTitle": () => (/* binding */ profileTitle),
/* harmony export */   "profileInputName": () => (/* binding */ profileInputName),
/* harmony export */   "profileInputTitle": () => (/* binding */ profileInputTitle),
/* harmony export */   "formCardAdder": () => (/* binding */ formCardAdder),
/* harmony export */   "formEditProfile": () => (/* binding */ formEditProfile),
/* harmony export */   "popupImageExpanded": () => (/* binding */ popupImageExpanded),
/* harmony export */   "popupProfile": () => (/* binding */ popupProfile),
/* harmony export */   "profileEditBtn": () => (/* binding */ profileEditBtn),
/* harmony export */   "cardAddBtn": () => (/* binding */ cardAddBtn),
/* harmony export */   "profileNameInput": () => (/* binding */ profileNameInput),
/* harmony export */   "profileTitleInput": () => (/* binding */ profileTitleInput),
/* harmony export */   "popupFormProfile": () => (/* binding */ popupFormProfile),
/* harmony export */   "popupCard": () => (/* binding */ popupCard),
/* harmony export */   "popupFormCard": () => (/* binding */ popupFormCard),
/* harmony export */   "formSettings": () => (/* binding */ formSettings),
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var cardsContainer = "elements";
var cardTemplate = "#cards";
var profileName = document.querySelector(".profile__title");
var profileTitle = document.querySelector(".profile__tag");
var profileInputName = document.querySelector(".popup__input_value_name");
var profileInputTitle = document.querySelector(".popup__input_value_about");
var formCardAdder = document.querySelector(".popup__form_card");
var formEditProfile = document.querySelector(".popup__form_profile");
var popupImageExpanded = "popup_image-expanded";
var popupProfile = "popup_profile";
var profileEditBtn = document.querySelector(".profile__edit-button");
var cardAddBtn = document.querySelector(".profile__plus-button");
var profileNameInput = document.querySelector(".popup__input_value_name");
var profileTitleInput = document.querySelector(".popup__input_value_about");
var popupFormProfile = ".popup__form_profile";
var popupCard = "popup_card";
var popupFormCard = ".popup__form_card";
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible"
};
var initialCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");







 // adding the cards to the page

var createCard = function createCard(data) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.default({
    data: data,
    handleCardClick: function handleCardClick() {
      popupImage.open(data);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.cardTemplate);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_6__.default({
  renderer: function renderer(data) {
    var newCard = createCard(data);
    var cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.cardsContainer);
cardList.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.initialCards); // enabling image popup

var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupImageExpanded);
popupImage.setEventListeners(); // adding user info "Name" and "title" to the page

var user = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.default({
  nameElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileName,
  titleElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileTitle
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileEditBtn.addEventListener("click", function () {
  var profileData = user.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileNameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileTitleInput.value = profileData.title;
  profileFormValidator.resetValidation();
  userInfoPopupForm.open();
});
var userInfoPopupForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupProfile,
  formSubmitHandler: function formSubmitHandler(data) {
    user.setUserInfo(data);
  }
});
var profileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupFormProfile);
profileFormValidator.enableValidation();
userInfoPopupForm.setEventListeners(); //adding image card to the page

var imageCardFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupCard,
  formSubmitHandler: function formSubmitHandler(data) {
    var newCard = createCard(data);
    cardList.addItem(newCard.generateCard());
  }
});
var cardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupFormCard);
cardFormValidator.enableValidation();
imageCardFormPopup.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.cardAddBtn.addEventListener("click", function () {
  cardFormValidator.resetValidation();
  imageCardFormPopup.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQWtCLENBQUNmLElBQW5CO0FBQ0QsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoeyBkYXRhLCBoYW5kbGVDYXJkQ2xpY2sgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2hlYXJ0LWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvZ2dsZUxpa2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19kZWxldGUtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZGVsZXRlQ2FyZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgX3RvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19oZWFydC1pY29uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50c19faGVhcnQtaWNvbl9saWtlZFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX2RlbGV0ZUNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faW1hZ2VcIikuc3JjID0gdGhpcy5fbGluaztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RleHQ7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1FbGVtZW50KTtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IHNldHRpbmdzLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2V2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cFNlbGVjdG9yfWApO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZihldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlT3ZlcmxheUNsb3NlKGV2dCkge1xyXG4gICAgICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIilcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2UtYnRuXCIpO1xyXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW4nKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGZvcm1TdWJtaXRIYW5kbGVyIH0pe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICAgICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIgPSBmb3JtU3VibWl0SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRJdGVtcyA9IEFycmF5LmZyb20odGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKSk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dEl0ZW1zLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlcih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIG9wZW4oIHsgbGluaywgbmFtZSB9ICkge1xyXG4gICAgICAgIHRoaXMuX2V4cGFkZWRJbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtZXhwYW5kZWRfX2ltYWdlJyk7XHJcbiAgICAgICAgdGhpcy5fZXhwYW5kZWRJbWFnZVRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1leHBhbmRlZF9fdGl0bGUnKTtcclxuICAgICAgICB0aGlzLl9leHBhZGVkSW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgICB0aGlzLl9leHBhZGVkSW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9leHBhbmRlZEltYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWVFbGVtZW50LCB0aXRsZUVsZW1lbnQgIH0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudCA9IG5hbWVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRpdGxlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gXCJlbGVtZW50c1wiO1xyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gXCIjY2FyZHNcIjtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGFnXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX2Fib3V0XCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUNhcmRBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fcHJvZmlsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VFeHBhbmRlZCA9IFwicG9wdXBfaW1hZ2UtZXhwYW5kZWRcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwUHJvZmlsZSA9IFwicG9wdXBfcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgY2FyZEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfbmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfYWJvdXRcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEZvcm1Qcm9maWxlID0gXCIucG9wdXBfX2Zvcm1fcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBDYXJkID0gXCJwb3B1cF9jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEZvcm1DYXJkID0gXCIucG9wdXBfX2Zvcm1fY2FyZFwiO1xyXG5leHBvcnQgY29uc3QgZm9ybVNldHRpbmdzID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J0blwiLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnRuX2luYWN0aXZlXCIsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICAgIGVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0LWVycm9yX3Zpc2libGVcIixcclxuICB9O1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdOyAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IHtcclxuICBjYXJkQWRkQnRuLFxyXG4gIHBvcHVwRm9ybUNhcmQsXHJcbiAgcG9wdXBDYXJkLFxyXG4gIHBvcHVwRm9ybVByb2ZpbGUsXHJcbiAgcHJvZmlsZU5hbWVJbnB1dCxcclxuICBwcm9maWxlVGl0bGVJbnB1dCxcclxuICBwcm9maWxlRWRpdEJ0bixcclxuICBwb3B1cFByb2ZpbGUsXHJcbiAgY2FyZFRlbXBsYXRlLFxyXG4gIHBvcHVwSW1hZ2VFeHBhbmRlZCxcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgY2FyZHNDb250YWluZXIsXHJcbiAgcHJvZmlsZU5hbWUsXHJcbiAgcHJvZmlsZVRpdGxlLFxyXG4gIGZvcm1TZXR0aW5ncyxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG4vLyBhZGRpbmcgdGhlIGNhcmRzIHRvIHRoZSBwYWdlXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBwb3B1cEltYWdlLm9wZW4oZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2FyZFRlbXBsYXRlXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHNDb250YWluZXJcclxuKTtcclxuXHJcbmNhcmRMaXN0LnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XHJcblxyXG4vLyBlbmFibGluZyBpbWFnZSBwb3B1cFxyXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwSW1hZ2VFeHBhbmRlZCk7XHJcbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vIGFkZGluZyB1c2VyIGluZm8gXCJOYW1lXCIgYW5kIFwidGl0bGVcIiB0byB0aGUgcGFnZVxyXG5jb25zdCB1c2VyID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lRWxlbWVudDogcHJvZmlsZU5hbWUsXHJcbiAgdGl0bGVFbGVtZW50OiBwcm9maWxlVGl0bGUsXHJcbn0pO1xyXG5cclxucHJvZmlsZUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBwcm9maWxlRGF0YSA9IHVzZXIuZ2V0VXNlckluZm8oKTtcclxuICBwcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcclxuICBwcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLnRpdGxlO1xyXG5cclxuICBwcm9maWxlRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICB1c2VySW5mb1BvcHVwRm9ybS5vcGVuKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlckluZm9Qb3B1cEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogcG9wdXBQcm9maWxlLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoZGF0YSkgPT4ge1xyXG4gICAgdXNlci5zZXRVc2VySW5mbyhkYXRhKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmdzLCBwb3B1cEZvcm1Qcm9maWxlKTtcclxucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG51c2VySW5mb1BvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy9hZGRpbmcgaW1hZ2UgY2FyZCB0byB0aGUgcGFnZVxyXG5jb25zdCBpbWFnZUNhcmRGb3JtUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogcG9wdXBDYXJkLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XHJcbiAgICBjYXJkTGlzdC5hZGRJdGVtKG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCkpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgY2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtU2V0dGluZ3MsIHBvcHVwRm9ybUNhcmQpO1xyXG5cclxuY2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuaW1hZ2VDYXJkRm9ybVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jYXJkQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2FyZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgaW1hZ2VDYXJkRm9ybVBvcHVwLm9wZW4oKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNhcmRDbGljayIsIl90ZXh0IiwibmFtZSIsIl9saW5rIiwibGluayIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfY2FyZFNlbGVjdG9yIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RvZ2dsZUxpa2UiLCJfZGVsZXRlQ2FyZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dExpc3QiLCJzb21lIiwiYnV0dG9uRWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2lzVmFsaWQiLCJfZXZlbnRMaXN0ZW5lcnMiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIl9oYW5kbGVPdmVybGF5Q2xvc2UiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VCdXR0b24iLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9mb3JtU3VibWl0SGFuZGxlciIsIl9pbnB1dEl0ZW1zIiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfZXhwYWRlZEltYWdlIiwiX2V4cGFuZGVkSW1hZ2VUaXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJhcHBlbmQiLCJpdGVtcyIsIml0ZW0iLCJVc2VySW5mbyIsIm5hbWVFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiX25hbWVFbGVtZW50IiwiX3RpdGxlRWxlbWVudCIsInVzZXJEYXRhIiwidGl0bGUiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRUZW1wbGF0ZSIsInByb2ZpbGVOYW1lIiwicHJvZmlsZVRpdGxlIiwicHJvZmlsZUlucHV0TmFtZSIsInByb2ZpbGVJbnB1dFRpdGxlIiwiZm9ybUNhcmRBZGRlciIsImZvcm1FZGl0UHJvZmlsZSIsInBvcHVwSW1hZ2VFeHBhbmRlZCIsInBvcHVwUHJvZmlsZSIsInByb2ZpbGVFZGl0QnRuIiwiY2FyZEFkZEJ0biIsInByb2ZpbGVOYW1lSW5wdXQiLCJwcm9maWxlVGl0bGVJbnB1dCIsInBvcHVwRm9ybVByb2ZpbGUiLCJwb3B1cENhcmQiLCJwb3B1cEZvcm1DYXJkIiwiZm9ybVNldHRpbmdzIiwiaW5pdGlhbENhcmRzIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsInBvcHVwSW1hZ2UiLCJvcGVuIiwiY2FyZExpc3QiLCJuZXdDYXJkIiwiZ2VuZXJhdGVDYXJkIiwiYWRkSXRlbSIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ1c2VyIiwicHJvZmlsZURhdGEiLCJnZXRVc2VySW5mbyIsInByb2ZpbGVGb3JtVmFsaWRhdG9yIiwicmVzZXRWYWxpZGF0aW9uIiwidXNlckluZm9Qb3B1cEZvcm0iLCJzZXRVc2VySW5mbyIsImVuYWJsZVZhbGlkYXRpb24iLCJpbWFnZUNhcmRGb3JtUG9wdXAiLCJjYXJkRm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=