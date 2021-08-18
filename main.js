/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

    this._baseUrl = "https://around.nomoreparties.co/v1/group-13", this._headers = {
      authorization: "4bb4f649-ce49-4e5f-81c2-ac119aac9e7d",
      "Content-type": "application/json; charset=UTF-8"
    };
  }

  _createClass(Api, [{
    key: "renderUserInfo",
    value: function renderUserInfo() {
      return fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      return fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      return fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "sendUserInfo",
    value: function sendUserInfo(newUserInfo) {
      return fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          name: newUserInfo.name,
          about: newUserInfo.about
        })
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "sendAvatar",
    value: function sendAvatar(newAvatar) {
      return fetch(this._baseUrl + '/users/me/avatar', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar: newAvatar.avatar
        })
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "sendCard",
    value: function sendCard(_ref) {
      var name = _ref.name,
          link = _ref.link;
      return fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: 'POST',
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        headers: this._headers,
        method: 'PUT'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "removeCardLike",
    value: function removeCardLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        headers: this._headers,
        method: 'DELETE'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        headers: this._headers,
        method: 'DELETE'
      }).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  }]);

  return Api;
}();



/***/ }),

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
        handleCardClick = _ref.handleCardClick,
        handleDeleteClick = _ref.handleDeleteClick,
        userData = _ref.userData,
        handleCardLike = _ref.handleCardLike;

    _classCallCheck(this, Card);

    this._text = data.name;
    this._link = data.link;
    this._likedData = data.likes;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._ownerName = data.owner.name;
    this._ownerId = data.owner._id;
    this._user = userData;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
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

      this._deleteBtn = this._element.querySelector('.elements__delete-icon');

      if (!(this._ownerId === this._user)) {
        this._deleteBtn.remove();

        console.log(this._ownerId);
        console.log(this._user);
      } else {
        this._deleteBtn.addEventListener('click', function (evt) {
          _this._handleDeleteClick(evt);
        });
      }

      this._element.querySelector(".elements__heart-icon").addEventListener('click', function (evt) {
        _this._toggleLikeStatus(evt);
      });

      this._element.querySelector(".elements__image").addEventListener("click", function () {
        _this._handleCardClick();
      });
    }
  }, {
    key: "_toggleLikeStatus",
    value: function _toggleLikeStatus(evt) {
      var _this2 = this;

      this._handleCardLike(!evt.target.classList.contains('elements__heart-icon_liked')).then(function (data) {
        evt.target.classList.toggle('elements__heart-icon_liked');

        _this2._updateLikesShown(evt, data);
      }).catch(function (err) {
        return console.log("Error ".concat(err));
      });
    }
  }, {
    key: "_updateLikesShown",
    value: function _updateLikesShown(evt, data) {
      var likeCountElement = this._element.querySelector('.elements__like-counter');

      likeCountElement.textContent = data.likes.length;
    }
  }, {
    key: "_setLikedStatus",
    value: function _setLikedStatus() {
      var _this3 = this;

      this._element.querySelector('.elements__like-counter').textContent = this._likeCount;

      var hasUserLiked = this._likedData.some(function (likes) {
        return likes._id === _this3._user;
      });

      if (hasUserLiked) {
        this._element.querySelector('.elements__heart-icon').classList.add('elements__heart-icon_liked');
      }
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._getTemplate();

      this._setEventListeners();

      this._setLikedStatus();

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

/***/ "./src/components/PopupDeleteCard.js":
/*!*******************************************!*\
  !*** ./src/components/PopupDeleteCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupDeleteCard)
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



var PopupDeleteCard = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteCard, _Popup);

  var _super = _createSuper(PopupDeleteCard);

  function PopupDeleteCard(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        formSubmitHandler = _ref.formSubmitHandler;

    _classCallCheck(this, PopupDeleteCard);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popupElement.querySelector(".popup__form");
    _this._button = _this._popupElement.querySelector(".popup__btn_confirmation-delete");
    _this._formSubmitHandler = formSubmitHandler;
    return _this;
  }

  _createClass(PopupDeleteCard, [{
    key: "open",
    value: function open(evt, cardId) {
      _get(_getPrototypeOf(PopupDeleteCard.prototype), "open", this).call(this);

      this._button.textContent = 'Yes';
      this._cardId = cardId;
      this._card = evt.target.parentElement;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupDeleteCard.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._button.textContent = 'Deleting...';

        _this2._formSubmitHandler(_this2._card, _this2._cardId); // this.close();

      });
    }
  }]);

  return PopupDeleteCard;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



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
    _this._button = _this._popupElement.querySelector(".popup__btn");
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

        _this3._button.textContent = "Saving...";
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);

      this._button.textContent = "Save";
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
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
      this._container.prepend(element);
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

/***/ "./src/components/UserAvatar.js":
/*!**************************************!*\
  !*** ./src/components/UserAvatar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserAvatar)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserAvatar = /*#__PURE__*/function () {
  function UserAvatar(_ref) {
    var avatarElement = _ref.avatarElement;

    _classCallCheck(this, UserAvatar);

    this._avatarElement = avatarElement;
  }

  _createClass(UserAvatar, [{
    key: "getUserAvatar",
    value: function getUserAvatar() {
      this.userData = {
        avatar: this._avatarElement.src
      };
      return this.userData;
    }
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(data) {
      this._avatarElement.src = data.avatar;
    }
  }]);

  return UserAvatar;
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
      this._titleElement.textContent = data.about;
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
/* harmony export */   "profileAvatarImage": () => (/* binding */ profileAvatarImage),
/* harmony export */   "profileInputName": () => (/* binding */ profileInputName),
/* harmony export */   "profileInputTitle": () => (/* binding */ profileInputTitle),
/* harmony export */   "formCardAdder": () => (/* binding */ formCardAdder),
/* harmony export */   "formEditProfile": () => (/* binding */ formEditProfile),
/* harmony export */   "popupImageExpanded": () => (/* binding */ popupImageExpanded),
/* harmony export */   "popupDeleteConfirmationCard": () => (/* binding */ popupDeleteConfirmationCard),
/* harmony export */   "popupProfile": () => (/* binding */ popupProfile),
/* harmony export */   "avatarImage": () => (/* binding */ avatarImage),
/* harmony export */   "profileEditBtn": () => (/* binding */ profileEditBtn),
/* harmony export */   "cardAddBtn": () => (/* binding */ cardAddBtn),
/* harmony export */   "profileNameInput": () => (/* binding */ profileNameInput),
/* harmony export */   "profileTitleInput": () => (/* binding */ profileTitleInput),
/* harmony export */   "avatarUrlInput": () => (/* binding */ avatarUrlInput),
/* harmony export */   "popupFormProfile": () => (/* binding */ popupFormProfile),
/* harmony export */   "popupCard": () => (/* binding */ popupCard),
/* harmony export */   "popupFormCard": () => (/* binding */ popupFormCard),
/* harmony export */   "popupAvatarForm": () => (/* binding */ popupAvatarForm),
/* harmony export */   "avatarEditBtn": () => (/* binding */ avatarEditBtn),
/* harmony export */   "formSettings": () => (/* binding */ formSettings)
/* harmony export */ });
var cardsContainer = "elements";
var cardTemplate = "#cards";
var profileName = document.querySelector(".profile__title");
var profileTitle = document.querySelector(".profile__tag");
var profileAvatarImage = document.querySelector(".profile__image");
var profileInputName = document.querySelector(".popup__input_value_name");
var profileInputTitle = document.querySelector(".popup__input_value_about");
var formCardAdder = document.querySelector(".popup__form_card");
var formEditProfile = document.querySelector(".popup__form_profile");
var popupImageExpanded = "popup_image-expanded";
var popupDeleteConfirmationCard = "popup_confirmation-delete";
var popupProfile = "popup_profile";
var avatarImage = "popup_profile-image-edit";
var profileEditBtn = document.querySelector(".profile__edit-button");
var cardAddBtn = document.querySelector(".profile__plus-button");
var profileNameInput = document.querySelector(".popup__input_value_name");
var profileTitleInput = document.querySelector(".popup__input_value_about");
var avatarUrlInput = document.querySelector(".popup__input_profile_link");
var popupFormProfile = ".popup__form_profile";
var popupCard = "popup_card";
var popupFormCard = ".popup__form_card";
var popupAvatarForm = ".popup__form-profile-image";
var avatarEditBtn = document.querySelector(".profile__picture");
var formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible"
};

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
/* harmony import */ var _components_UserAvatar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserAvatar.js */ "./src/components/UserAvatar.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupDeleteCard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupDeleteCard.js */ "./src/components/PopupDeleteCard.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");











/*----------------------- Initializing Api Class --------------------*/

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__.default();
/*----------------------- Adding and Updating Cards --------------------*/

var createCard = function createCard(data) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.default({
    data: data,
    handleCardClick: function handleCardClick() {
      popupImage.open(data);
    },
    handleDeleteClick: function handleDeleteClick(evt) {
      popupDelete.open(evt, data._id);
    },
    userData: "ff7f8240f3b1cc171b16d984",
    // api.renderUserInfo().then((data) => {
    //    return data; "return data" doesn't work please suggest a way to do that
    // }),
    handleCardLike: function handleCardLike(status) {
      return status ? api.likeCard(data._id) : api.removeCardLike(data._id);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.cardTemplate);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_7__.default({
  renderer: function renderer(data) {
    var newCard = createCard(data);
    var cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.cardsContainer);
api.renderCard().then(function (data) {
  cardList.renderItems(data);
}); // enabling image popup

var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupImageExpanded);
popupImage.setEventListeners(); // enabling delete popup

var popupDelete = new _components_PopupDeleteCard_js__WEBPACK_IMPORTED_MODULE_8__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupDeleteConfirmationCard,
  formSubmitHandler: function formSubmitHandler(cardElement, cardId) {
    api.deleteCard(cardId).then(function () {
      cardElement.remove();
      popupDelete.close();
    });
  }
});
popupDelete.setEventListeners(); //adding image card to the page

var imageCardFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupCard,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendCard(data).then(function (cardData) {
      var newCard = createCard(cardData);
      cardList.addItem(newCard.generateCard());
    }).then(function () {
      imageCardFormPopup.close();
    });
  }
});
imageCardFormPopup.setEventListeners();
var cardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupFormCard);
cardFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.cardAddBtn.addEventListener("click", function () {
  cardFormValidator.resetValidation();
  imageCardFormPopup.open();
});
/*----------------------- Adding and Updating User Info --------------------*/
// adding user info "Name" and "title" to the page

var user = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.default({
  nameElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileName,
  titleElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileTitle
});
api.renderUserInfo().then(function (data) {
  user.setUserInfo(data);
});
var userInfoPopupForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupProfile,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendUserInfo(data).then(function () {
      user.setUserInfo(data);
      userInfoPopupForm.close();
    });
  }
});
userInfoPopupForm.setEventListeners();
var profileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupFormProfile);
profileFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileEditBtn.addEventListener("click", function () {
  var profileData = user.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileNameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileTitleInput.value = profileData.title;
  profileFormValidator.resetValidation();
  userInfoPopupForm.open();
});
/*----------------------- Avatar Update--------------------*/

var avatar = new _components_UserAvatar_js__WEBPACK_IMPORTED_MODULE_6__.default({
  avatarElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.profileAvatarImage
});
var avatarUpdateForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.avatarImage,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendAvatar(data).then(function (data) {
      avatar.setUserAvatar(data);
      avatarUpdateForm.close(data);
    });
  }
});
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.popupAvatarForm);
avatarFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.avatarEditBtn.addEventListener("click", function () {
  var getAvatar = avatar.getUserAvatar();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.avatarUrlInput.value = getAvatar.avatar;
  avatarUpdateForm.open();
});
avatarUpdateForm.setEventListeners();
api.renderAvatar().then(function (data) {
  avatar.setUserAvatar(data);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckF2YXRhci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9iYXNlVXJsID0gXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEzXCIsXHJcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IHtcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogXCI0YmI0ZjY0OS1jZTQ5LTRlNWYtODFjMi1hYzExOWFhYzllN2RcIixcclxuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL3VzZXJzL21lJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7ZXJyfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBdmF0YXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL3VzZXJzL21lJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7ZXJyfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy9jYXJkcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciAke2Vycn1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFVzZXJJbmZvKG5ld1VzZXJJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL3VzZXJzL21lJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5ld1VzZXJJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhYm91dDogbmV3VXNlckluZm8uYWJvdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJ9YCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQXZhdGFyKG5ld0F2YXRhcikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy91c2Vycy9tZS9hdmF0YXInLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBuZXdBdmF0YXIuYXZhdGFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciAke2Vycn1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZENhcmQoe25hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL2NhcmRzJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJ9YCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsaWtlQ2FyZChjYXJkSWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7ZXJyfWApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FyZExpa2UoY2FyZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciAke2Vycn1gKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciAke2Vycn1gKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2xpY2ssIHVzZXJEYXRhLCBoYW5kbGVDYXJkTGlrZSB9LCBjYXJkU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcblxyXG4gICAgICAgIHRoaXMuX2xpa2VkRGF0YSA9IGRhdGEubGlrZXM7XHJcbiAgICAgICAgdGhpcy5fbGlrZUNvdW50ID0gZGF0YS5saWtlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fY2FyZElkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgdGhpcy5fb3duZXJOYW1lID0gZGF0YS5vd25lci5uYW1lO1xyXG4gICAgICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlckRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayA9IGhhbmRsZURlbGV0ZUNsaWNrO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRMaWtlID0gaGFuZGxlQ2FyZExpa2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBjYXJkRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2RlbGV0ZS1pY29uJyk7XHJcblxyXG4gICAgICAgIGlmKCEodGhpcy5fb3duZXJJZCA9PT0gdGhpcy5fdXNlcikpIHtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZUJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX293bmVySWQpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrKGV2dCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19oZWFydC1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvZ2dsZUxpa2VTdGF0dXMoZXZ0KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIF90b2dnbGVMaWtlU3RhdHVzKGV2dCkge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRMaWtlKCFldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWxlbWVudHNfX2hlYXJ0LWljb25fbGlrZWQnKSlcclxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2VsZW1lbnRzX19oZWFydC1pY29uX2xpa2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpa2VzU2hvd24oZXZ0LCBkYXRhKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBFcnJvciAke2Vycn1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUxpa2VzU2hvd24oZXZ0LCBkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGxpa2VDb3VudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1jb3VudGVyJyk7XHJcbiAgICAgIGxpa2VDb3VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmxpa2VzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TGlrZWRTdGF0dXMoKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19saWtlLWNvdW50ZXInKS50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VDb3VudDtcclxuXHJcbiAgICAgIGNvbnN0IGhhc1VzZXJMaWtlZCA9IHRoaXMuX2xpa2VkRGF0YS5zb21lKGxpa2VzID0+IGxpa2VzLl9pZCA9PT0gdGhpcy5fdXNlcik7XHJcblxyXG4gICAgICBpZihoYXNVc2VyTGlrZWQpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faGVhcnQtaWNvbicpLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRzX19oZWFydC1pY29uX2xpa2VkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl9zZXRMaWtlZFN0YXR1cygpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RleHQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pbWFnZVwiKS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faW1hZ2VcIikuYWx0ID0gdGhpcy5fdGV4dDtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUVsZW1lbnQpO1xyXG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgX2lzVmFsaWQoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoXHJcbiAgICAgICAgZm9ybUVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuXHJcbiAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzVmFsaWQoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuXHJcbiAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKHRoaXMuX2Zvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9YCk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSA9IHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVPdmVybGF5Q2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgaWYoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbigpe1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1idG5cIik7XHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfb3BlbicpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGZvcm1TdWJtaXRIYW5kbGVyIH0pIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idG5fY29uZmlybWF0aW9uLWRlbGV0ZVwiKTtcclxuICAgICAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlciA9IGZvcm1TdWJtaXRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oZXZ0LCBjYXJkSWQpIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gJ1llcyc7XHJcbiAgICAgICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xyXG4gICAgICAgIHRoaXMuX2NhcmQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRpbmcuLi4nO1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlcih0aGlzLl9jYXJkLCB0aGlzLl9jYXJkSWQpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgZm9ybVN1Ym1pdEhhbmRsZXIgfSl7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgICAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnRuXCIpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyID0gZm9ybVN1Ym1pdEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0SXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0JykpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWVzID0ge307XHJcbiAgICAgICAgdGhpcy5faW5wdXRJdGVtcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlcih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCJcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0ICBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgb3BlbiggeyBsaW5rLCBuYW1lIH0gKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwYWRlZEltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1leHBhbmRlZF9faW1hZ2UnKTtcclxuICAgICAgICB0aGlzLl9leHBhbmRlZEltYWdlVGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLWV4cGFuZGVkX190aXRsZScpO1xyXG4gICAgICAgIHRoaXMuX2V4cGFkZWRJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgICAgIHRoaXMuX2V4cGFkZWRJbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2V4cGFuZGVkSW1hZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcclxuICAgIH1cclxuICAgIGFkZEl0ZW0oZWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQXZhdGFye1xyXG4gICAgY29uc3RydWN0b3IoIHthdmF0YXJFbGVtZW50fSApIHtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50ID0gYXZhdGFyRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyQXZhdGFyKCkge1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogdGhpcy5fYXZhdGFyRWxlbWVudC5zcmNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJBdmF0YXIoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2F2YXRhckVsZW1lbnQuc3JjID0gZGF0YS5hdmF0YXI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWVFbGVtZW50LCB0aXRsZUVsZW1lbnQgfSkge1xyXG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50ID0gbmFtZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGl0bGVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgY2FyZHNDb250YWluZXIgPSBcImVsZW1lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBcIiNjYXJkc1wiO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190YWdcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX2Fib3V0XCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUNhcmRBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fcHJvZmlsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VFeHBhbmRlZCA9IFwicG9wdXBfaW1hZ2UtZXhwYW5kZWRcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZCA9IFwicG9wdXBfY29uZmlybWF0aW9uLWRlbGV0ZVwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBQcm9maWxlID0gXCJwb3B1cF9wcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBhdmF0YXJJbWFnZSA9IFwicG9wdXBfcHJvZmlsZS1pbWFnZS1lZGl0XCI7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBjYXJkQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19wbHVzLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9uYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9hYm91dFwiKTtcclxuZXhwb3J0IGNvbnN0IGF2YXRhclVybElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfcHJvZmlsZV9saW5rXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBGb3JtUHJvZmlsZSA9IFwiLnBvcHVwX19mb3JtX3Byb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwQ2FyZCA9IFwicG9wdXBfY2FyZFwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBGb3JtQ2FyZCA9IFwiLnBvcHVwX19mb3JtX2NhcmRcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwQXZhdGFyRm9ybSA9IFwiLnBvcHVwX19mb3JtLXByb2ZpbGUtaW1hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IGF2YXRhckVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BpY3R1cmVcIilcclxuZXhwb3J0IGNvbnN0IGZvcm1TZXR0aW5ncyA9IHtcclxuICAgIGZvcm1TZWxlY3RvcjogXCIucG9wdXBfX2Zvcm1cIixcclxuICAgIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idG5cIixcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J0bl9pbmFjdGl2ZVwiLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgICBlcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dC1lcnJvcl92aXNpYmxlXCIsXHJcbiAgfTtcclxuICAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdmF0YXIuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qc1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNhcmRBZGRCdG4sXHJcbiAgcG9wdXBGb3JtQ2FyZCxcclxuICBwb3B1cENhcmQsXHJcbiAgcG9wdXBGb3JtUHJvZmlsZSxcclxuICBwcm9maWxlTmFtZUlucHV0LFxyXG4gIHByb2ZpbGVUaXRsZUlucHV0LFxyXG4gIHByb2ZpbGVFZGl0QnRuLFxyXG4gIHBvcHVwUHJvZmlsZSxcclxuICBjYXJkVGVtcGxhdGUsXHJcbiAgcG9wdXBJbWFnZUV4cGFuZGVkLFxyXG4gIGNhcmRzQ29udGFpbmVyLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG4gIHByb2ZpbGVUaXRsZSxcclxuICBmb3JtU2V0dGluZ3MsXHJcbiAgYXZhdGFyRWRpdEJ0bixcclxuICBhdmF0YXJJbWFnZSxcclxuICBwcm9maWxlQXZhdGFySW1hZ2UsXHJcbiAgYXZhdGFyVXJsSW5wdXQsXHJcbiAgcG9wdXBBdmF0YXJGb3JtLFxyXG4gIHBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5pdGlhbGl6aW5nIEFwaSBDbGFzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFkZGluZyBhbmQgVXBkYXRpbmcgQ2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBwb3B1cEltYWdlLm9wZW4oZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZURlbGV0ZUNsaWNrOiAoZXZ0KSA9PiB7XHJcbiAgICAgICAgcG9wdXBEZWxldGUub3BlbihldnQsIGRhdGEuX2lkKTtcclxuICAgICAgfSxcclxuICAgICAgdXNlckRhdGE6IFwiZmY3ZjgyNDBmM2IxY2MxNzFiMTZkOTg0XCIsXHJcbiAgICAgIC8vIGFwaS5yZW5kZXJVc2VySW5mbygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgLy8gICAgcmV0dXJuIGRhdGE7IFwicmV0dXJuIGRhdGFcIiBkb2Vzbid0IHdvcmsgcGxlYXNlIHN1Z2dlc3QgYSB3YXkgdG8gZG8gdGhhdFxyXG4gICAgICAvLyB9KSxcclxuICAgICAgaGFuZGxlQ2FyZExpa2U6IHN0YXR1cyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA/IGFwaS5saWtlQ2FyZChkYXRhLl9pZCkgOiBhcGkucmVtb3ZlQ2FyZExpa2UoZGF0YS5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FyZFRlbXBsYXRlXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHNDb250YWluZXJcclxuKTtcclxuXHJcbmFwaS5yZW5kZXJDYXJkKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gIGNhcmRMaXN0LnJlbmRlckl0ZW1zKGRhdGEpO1xyXG59KVxyXG5cclxuLy8gZW5hYmxpbmcgaW1hZ2UgcG9wdXBcclxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3B1cEltYWdlRXhwYW5kZWQpO1xyXG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyBlbmFibGluZyBkZWxldGUgcG9wdXBcclxuY29uc3QgcG9wdXBEZWxldGUgPSBuZXcgUG9wdXBEZWxldGVDYXJkKHtcclxuICBwb3B1cFNlbGVjdG9yOnBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZCxcclxuICBmb3JtU3VibWl0SGFuZGxlcjogKGNhcmRFbGVtZW50LCBjYXJkSWQpID0+IHtcclxuICAgIGFwaS5kZWxldGVDYXJkKGNhcmRJZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBwb3B1cERlbGV0ZS5jbG9zZSgpO1xyXG4gICAgfSlcclxuICB9XHJcbn0pO1xyXG5wb3B1cERlbGV0ZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy9hZGRpbmcgaW1hZ2UgY2FyZCB0byB0aGUgcGFnZVxyXG5jb25zdCBpbWFnZUNhcmRGb3JtUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogcG9wdXBDYXJkLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoZGF0YSkgPT4ge1xyXG4gICAgYXBpLnNlbmRDYXJkKGRhdGEpXHJcbiAgICAudGhlbiggY2FyZERhdGEgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XHJcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKSk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgaW1hZ2VDYXJkRm9ybVBvcHVwLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuaW1hZ2VDYXJkRm9ybVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBjYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1TZXR0aW5ncywgcG9wdXBGb3JtQ2FyZCk7XHJcblxyXG5jYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jYXJkQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2FyZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgaW1hZ2VDYXJkRm9ybVBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQWRkaW5nIGFuZCBVcGRhdGluZyBVc2VyIEluZm8gLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLy8gYWRkaW5nIHVzZXIgaW5mbyBcIk5hbWVcIiBhbmQgXCJ0aXRsZVwiIHRvIHRoZSBwYWdlXHJcbmNvbnN0IHVzZXIgPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVFbGVtZW50OiBwcm9maWxlTmFtZSxcclxuICB0aXRsZUVsZW1lbnQ6IHByb2ZpbGVUaXRsZSxcclxufSk7XHJcblxyXG5hcGkucmVuZGVyVXNlckluZm8oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgdXNlci5zZXRVc2VySW5mbyhkYXRhKTtcclxufSlcclxuXHJcbmNvbnN0IHVzZXJJbmZvUG9wdXBGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHBvcHVwUHJvZmlsZSxcclxuICBmb3JtU3VibWl0SGFuZGxlcjogKGRhdGEpID0+IHtcclxuICAgIGFwaS5zZW5kVXNlckluZm8oZGF0YSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgdXNlci5zZXRVc2VySW5mbyhkYXRhKTtcclxuICAgICAgdXNlckluZm9Qb3B1cEZvcm0uY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG51c2VySW5mb1BvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtU2V0dGluZ3MsIHBvcHVwRm9ybVByb2ZpbGUpO1xyXG5wcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlci5nZXRVc2VySW5mbygpO1xyXG4gIHByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5uYW1lO1xyXG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEudGl0bGU7XHJcblxyXG4gIHByb2ZpbGVGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIHVzZXJJbmZvUG9wdXBGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEF2YXRhciBVcGRhdGUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5jb25zdCBhdmF0YXIgPSBuZXcgVXNlckF2YXRhcih7XHJcbiAgYXZhdGFyRWxlbWVudDogcHJvZmlsZUF2YXRhckltYWdlXHJcbn0pXHJcblxyXG5jb25zdCBhdmF0YXJVcGRhdGVGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IGF2YXRhckltYWdlLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoZGF0YSkgPT4ge1xyXG4gICAgYXBpLnNlbmRBdmF0YXIoZGF0YSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGF2YXRhci5zZXRVc2VyQXZhdGFyKGRhdGEpO1xyXG4gICAgICBhdmF0YXJVcGRhdGVGb3JtLmNsb3NlKGRhdGEpO1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBhdmF0YXJGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmdzLCBwb3B1cEF2YXRhckZvcm0pO1xyXG5hdmF0YXJGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuYXZhdGFyRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGdldEF2YXRhciA9IGF2YXRhci5nZXRVc2VyQXZhdGFyKCk7XHJcbiAgYXZhdGFyVXJsSW5wdXQudmFsdWUgPSBnZXRBdmF0YXIuYXZhdGFyO1xyXG4gIGF2YXRhclVwZGF0ZUZvcm0ub3BlbigpO1xyXG59KVxyXG5cclxuYXZhdGFyVXBkYXRlRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuYXBpLnJlbmRlckF2YXRhcigpLnRoZW4oKGRhdGEpID0+IHtcclxuICBhdmF0YXIuc2V0VXNlckF2YXRhcihkYXRhKTtcclxufSlcclxuIl0sIm5hbWVzIjpbIkFwaSIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuZXdVc2VySW5mbyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImFib3V0IiwibmV3QXZhdGFyIiwiYXZhdGFyIiwibGluayIsImNhcmRJZCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJkYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJ1c2VyRGF0YSIsImhhbmRsZUNhcmRMaWtlIiwiX3RleHQiLCJfbGluayIsIl9saWtlZERhdGEiLCJsaWtlcyIsIl9saWtlQ291bnQiLCJsZW5ndGgiLCJfY2FyZElkIiwiX2lkIiwiX293bmVyTmFtZSIsIm93bmVyIiwiX293bmVySWQiLCJfdXNlciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJfaGFuZGxlQ2FyZExpa2UiLCJfY2FyZFNlbGVjdG9yIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJfZGVsZXRlQnRuIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl90b2dnbGVMaWtlU3RhdHVzIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJfdXBkYXRlTGlrZXNTaG93biIsImxpa2VDb3VudEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImhhc1VzZXJMaWtlZCIsInNvbWUiLCJhZGQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfc2V0TGlrZWRTdGF0dXMiLCJzcmMiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9pc1ZhbGlkIiwiX2V2ZW50TGlzdGVuZXJzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJfaGFuZGxlT3ZlcmxheUNsb3NlIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZUJ1dHRvbiIsIlBvcHVwRGVsZXRlQ2FyZCIsImZvcm1TdWJtaXRIYW5kbGVyIiwiX2Zvcm0iLCJfYnV0dG9uIiwiX2Zvcm1TdWJtaXRIYW5kbGVyIiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybSIsIl9pbnB1dEl0ZW1zIiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfZXhwYWRlZEltYWdlIiwiX2V4cGFuZGVkSW1hZ2VUaXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJpdGVtIiwiVXNlckF2YXRhciIsImF2YXRhckVsZW1lbnQiLCJfYXZhdGFyRWxlbWVudCIsIlVzZXJJbmZvIiwibmFtZUVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJfbmFtZUVsZW1lbnQiLCJfdGl0bGVFbGVtZW50IiwidGl0bGUiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRUZW1wbGF0ZSIsInByb2ZpbGVOYW1lIiwicHJvZmlsZVRpdGxlIiwicHJvZmlsZUF2YXRhckltYWdlIiwicHJvZmlsZUlucHV0TmFtZSIsInByb2ZpbGVJbnB1dFRpdGxlIiwiZm9ybUNhcmRBZGRlciIsImZvcm1FZGl0UHJvZmlsZSIsInBvcHVwSW1hZ2VFeHBhbmRlZCIsInBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZCIsInBvcHVwUHJvZmlsZSIsImF2YXRhckltYWdlIiwicHJvZmlsZUVkaXRCdG4iLCJjYXJkQWRkQnRuIiwicHJvZmlsZU5hbWVJbnB1dCIsInByb2ZpbGVUaXRsZUlucHV0IiwiYXZhdGFyVXJsSW5wdXQiLCJwb3B1cEZvcm1Qcm9maWxlIiwicG9wdXBDYXJkIiwicG9wdXBGb3JtQ2FyZCIsInBvcHVwQXZhdGFyRm9ybSIsImF2YXRhckVkaXRCdG4iLCJmb3JtU2V0dGluZ3MiLCJhcGkiLCJjcmVhdGVDYXJkIiwiY2FyZEluc3RhbmNlIiwicG9wdXBJbWFnZSIsIm9wZW4iLCJwb3B1cERlbGV0ZSIsInN0YXR1cyIsImxpa2VDYXJkIiwicmVtb3ZlQ2FyZExpa2UiLCJjYXJkTGlzdCIsIm5ld0NhcmQiLCJnZW5lcmF0ZUNhcmQiLCJhZGRJdGVtIiwicmVuZGVyQ2FyZCIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJkZWxldGVDYXJkIiwiaW1hZ2VDYXJkRm9ybVBvcHVwIiwic2VuZENhcmQiLCJjYXJkRGF0YSIsImNhcmRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInJlc2V0VmFsaWRhdGlvbiIsInVzZXIiLCJyZW5kZXJVc2VySW5mbyIsInNldFVzZXJJbmZvIiwidXNlckluZm9Qb3B1cEZvcm0iLCJzZW5kVXNlckluZm8iLCJwcm9maWxlRm9ybVZhbGlkYXRvciIsInByb2ZpbGVEYXRhIiwiZ2V0VXNlckluZm8iLCJhdmF0YXJVcGRhdGVGb3JtIiwic2VuZEF2YXRhciIsInNldFVzZXJBdmF0YXIiLCJhdmF0YXJGb3JtVmFsaWRhdG9yIiwiZ2V0QXZhdGFyIiwiZ2V0VXNlckF2YXRhciIsInJlbmRlckF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=