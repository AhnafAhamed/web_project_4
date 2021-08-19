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
  function Api(params) {
    _classCallCheck(this, Api);

    this.baseUrl = params.baseUrl, this.headers = params.headers;
  }

  _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error");
    }
  }, {
    key: "renderUserInfo",
    value: function renderUserInfo() {
      var _this = this;

      return fetch(this.baseUrl + '/users/me', {
        headers: this.headers,
        method: 'GET'
      }).then(function (res) {
        return _this._checkResponse(res);
      });
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      var _this2 = this;

      return fetch(this.baseUrl + '/cards', {
        headers: this.headers,
        method: 'GET'
      }).then(function (res) {
        return _this2._checkResponse(res);
      });
    }
  }, {
    key: "sendUserInfo",
    value: function sendUserInfo(newUserInfo) {
      var _this3 = this;

      return fetch(this.baseUrl + '/users/me', {
        headers: this.headers,
        method: 'PATCH',
        body: JSON.stringify({
          name: newUserInfo.name,
          about: newUserInfo.about
        })
      }).then(function (res) {
        return _this3._checkResponse(res);
      });
    }
  }, {
    key: "sendAvatar",
    value: function sendAvatar(newAvatar) {
      var _this4 = this;

      return fetch(this.baseUrl + '/users/me/avatar', {
        headers: this.headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar: newAvatar.avatar
        })
      }).then(function (res) {
        return _this4._checkResponse(res);
      });
    }
  }, {
    key: "sendCard",
    value: function sendCard(_ref) {
      var _this5 = this;

      var name = _ref.name,
          link = _ref.link;
      return fetch(this.baseUrl + '/cards', {
        headers: this.headers,
        method: 'POST',
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this5._checkResponse(res);
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      var _this6 = this;

      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        headers: this.headers,
        method: 'PUT'
      }).then(function (res) {
        return _this6._checkResponse(res);
      });
    }
  }, {
    key: "removeCardLike",
    value: function removeCardLike(cardId) {
      var _this7 = this;

      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        headers: this.headers,
        method: 'DELETE'
      }).then(function (res) {
        return _this7._checkResponse(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      var _this8 = this;

      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        headers: this._headers,
        method: 'DELETE'
      }).then(function (res) {
        return _this8._checkResponse(res);
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
    this._userData = userData;
    this._likedData = data.likes;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._ownerName = data.owner.name;
    this._ownerId = data.owner._id;
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

      if (!(this._ownerId === this._userData)) {
        this._deleteBtn.remove();

        console.log(this._ownerId);
        console.log(this._userData);
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
        titleElement = _ref.titleElement,
        avatarElement = _ref.avatarElement;

    _classCallCheck(this, UserInfo);

    this._nameElement = nameElement;
    this._titleElement = titleElement;
    this._avatarElement = avatarElement;
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
      this._avatarElement.src = data.avatar;
      this._userId = data._id;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return this._userId;
    }
  }, {
    key: "setAvatarImg",
    value: function setAvatarImg(data) {
      this._avatarElement.src = data.avatar;
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
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupDeleteCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupDeleteCard.js */ "./src/components/PopupDeleteCard.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/*----------------------- Initializing Api Class --------------------*/

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "4bb4f649-ce49-4e5f-81c2-ac119aac9e7d",
    "Content-Type": "application/json"
  }
});
/*----------------------- Rendering Data from Api --------------------*/

var initialProfileInfo = api.renderUserInfo();
var initialCards = api.renderCard();
Promise.all([initialProfileInfo, initialCards]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      cards = _ref2[1];

  cardList.renderItems(cards.reverse());
  user.setUserInfo(userData);
}).catch(function (err) {
  console.log("Error: ".concat(err));
});
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
    userData: user.getUserId(),
    handleCardLike: function handleCardLike(status) {
      return status ? api.likeCard(data._id) : api.removeCardLike(data._id);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardTemplate);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_6__.default({
  renderer: function renderer(data) {
    var newCard = createCard(data);
    var cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardsContainer); // enabling image popup

var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupImageExpanded);
popupImage.setEventListeners(); // enabling delete popup

var popupDelete = new _components_PopupDeleteCard_js__WEBPACK_IMPORTED_MODULE_7__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupDeleteConfirmationCard,
  formSubmitHandler: function formSubmitHandler(cardElement, cardId) {
    api.deleteCard(cardId).then(function () {
      cardElement.remove();
      popupDelete.close();
    }).catch(function (err) {
      console.log("Error: ".concat(err));
    });
  }
});
popupDelete.setEventListeners(); //adding image card to the page

var imageCardFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupCard,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendCard(data).then(function (cardData) {
      var newCard = createCard(cardData);
      cardList.addItem(newCard.generateCard());
    }).then(function () {
      imageCardFormPopup.close();
    }).catch(function (err) {
      console.log("Error: ".concat(err));
    });
  }
});
imageCardFormPopup.setEventListeners();
var cardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupFormCard);
cardFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardAddBtn.addEventListener("click", function () {
  cardFormValidator.resetValidation();
  imageCardFormPopup.open();
});
/*----------------------- Adding and Updating User Info --------------------*/
// adding user info "Name" and "title" to the page

var user = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.default({
  nameElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileName,
  titleElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileTitle,
  avatarElement: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatarImage
});
var userInfoPopupForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupProfile,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendUserInfo(data).then(function (data) {
      user.setUserInfo(data);
      userInfoPopupForm.close();
    }).catch(function (err) {
      console.log("Error: ".concat(err));
    });
  }
});
userInfoPopupForm.setEventListeners();
var profileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupFormProfile);
profileFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileEditBtn.addEventListener("click", function () {
  var profileData = user.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileNameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileTitleInput.value = profileData.title;
  profileFormValidator.resetValidation();
  userInfoPopupForm.open();
});
/*----------------------- Avatar Update--------------------*/

var avatarUpdateForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.default({
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarImage,
  formSubmitHandler: function formSubmitHandler(data) {
    api.sendAvatar(data).then(function (data) {
      user.setAvatarImg(data);
      avatarUpdateForm.close(data);
    }).catch(function (err) {
      console.log("Error: ".concat(err));
    });
  }
});
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupAvatarForm);
avatarFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarEditBtn.addEventListener("click", function () {
  avatarUpdateForm.open();
});
avatarUpdateForm.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBSixDQUFlck0sSUFBZixFQUNDaEIsSUFERCxDQUNNLFVBQUNnQixJQUFELEVBQVU7QUFDZHlLLE1BQUFBLElBQUksQ0FBQzZCLFlBQUwsQ0FBa0J0TSxJQUFsQjtBQUNBb00sTUFBQUEsZ0JBQWdCLENBQUNwRyxLQUFqQixDQUF1QmhHLElBQXZCO0FBQ0QsS0FKRCxFQUlHdUMsS0FKSCxDQUlTLFVBQUNDLEdBQUQsRUFBUztBQUNoQlgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLGtCQUFzQlUsR0FBdEI7QUFDRCxLQU5EO0FBT0Q7QUFWd0MsQ0FBbEIsQ0FBekI7QUFhQSxJQUFNK0osbUJBQW1CLEdBQUcsSUFBSW5KLGlFQUFKLENBQWtCeUcsNkRBQWxCLEVBQWdDRixnRUFBaEMsQ0FBNUI7QUFDQTRDLG1CQUFtQixDQUFDVixnQkFBcEI7QUFDQWpDLCtFQUFBLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUN3QyxFQUFBQSxnQkFBZ0IsQ0FBQ3RCLElBQWpCO0FBQ0QsQ0FGRDtBQUlBc0IsZ0JBQWdCLENBQUNiLGlCQUFqQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cERlbGV0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHBhcmFtcy5iYXNlVXJsLFxyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHBhcmFtcy5oZWFkZXJzXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrUmVzcG9uc2UocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJVc2VySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgJy91c2Vycy9tZScsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1Jlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArICcvY2FyZHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kVXNlckluZm8obmV3VXNlckluZm8pIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgJy91c2Vycy9tZScsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5ld1VzZXJJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhYm91dDogbmV3VXNlckluZm8uYWJvdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEF2YXRhcihuZXdBdmF0YXIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgJy91c2Vycy9tZS9hdmF0YXInLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IG5ld0F2YXRhci5hdmF0YXJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZENhcmQoe25hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArICcvY2FyZHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1Jlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpa2VDYXJkKGNhcmRJZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1Jlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhcmRMaWtlKGNhcmRJZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1Jlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoeyBkYXRhLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUNsaWNrLCB1c2VyRGF0YSwgaGFuZGxlQ2FyZExpa2UgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyRGF0YSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIHRoaXMuX2xpa2VkRGF0YSA9IGRhdGEubGlrZXM7XHJcbiAgICAgICAgdGhpcy5fbGlrZUNvdW50ID0gZGF0YS5saWtlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fY2FyZElkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgdGhpcy5fb3duZXJOYW1lID0gZGF0YS5vd25lci5uYW1lO1xyXG4gICAgICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZExpa2UgPSBoYW5kbGVDYXJkTGlrZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9kZWxldGVCdG4gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fZGVsZXRlLWljb24nKTtcclxuXHJcbiAgICAgICAgaWYoISh0aGlzLl9vd25lcklkID09PSB0aGlzLl91c2VyRGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZUJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX293bmVySWQpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyRGF0YSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayhldnQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faGVhcnQtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b2dnbGVMaWtlU3RhdHVzKGV2dCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBfdG9nZ2xlTGlrZVN0YXR1cyhldnQpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkTGlrZSghZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnRzX19oZWFydC1pY29uX2xpa2VkJykpXHJcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdlbGVtZW50c19faGVhcnQtaWNvbl9saWtlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMaWtlc1Nob3duKGV2dCwgZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJ9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVMaWtlc1Nob3duKGV2dCwgZGF0YSkge1xyXG4gICAgICBjb25zdCBsaWtlQ291bnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2UtY291bnRlcicpO1xyXG4gICAgICBsaWtlQ291bnRFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5saWtlcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldExpa2VkU3RhdHVzKCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1jb3VudGVyJykudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlQ291bnQ7XHJcblxyXG4gICAgICBjb25zdCBoYXNVc2VyTGlrZWQgPSB0aGlzLl9saWtlZERhdGEuc29tZShsaWtlcyA9PiBsaWtlcy5faWQgPT09IHRoaXMuX3VzZXIpO1xyXG5cclxuICAgICAgaWYoaGFzVXNlckxpa2VkKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2hlYXJ0LWljb24nKS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50c19faGVhcnQtaWNvbl9saWtlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0TGlrZWRTdGF0dXMoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faW1hZ2VcIikuc3JjID0gdGhpcy5fbGluaztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RleHQ7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1FbGVtZW50KTtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IHNldHRpbmdzLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2V2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cFNlbGVjdG9yfWApO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZihldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlT3ZlcmxheUNsb3NlKGV2dCkge1xyXG4gICAgICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIilcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2UtYnRuXCIpO1xyXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW4nKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRGVsZXRlQ2FyZCBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBmb3JtU3VibWl0SGFuZGxlciB9KSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgICAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnRuX2NvbmZpcm1hdGlvbi1kZWxldGVcIik7XHJcbiAgICAgICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIgPSBmb3JtU3VibWl0SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGV2dCwgY2FyZElkKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdZZXMnO1xyXG4gICAgICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcclxuICAgICAgICB0aGlzLl9jYXJkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0aW5nLi4uJztcclxuICAgICAgICAgICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIodGhpcy5fY2FyZCwgdGhpcy5fY2FyZElkKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGZvcm1TdWJtaXRIYW5kbGVyIH0pe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J0blwiKTtcclxuICAgICAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlciA9IGZvcm1TdWJtaXRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dEl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpKTtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2lucHV0SXRlbXMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIG9wZW4oIHsgbGluaywgbmFtZSB9ICkge1xyXG4gICAgICAgIHRoaXMuX2V4cGFkZWRJbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtZXhwYW5kZWRfX2ltYWdlJyk7XHJcbiAgICAgICAgdGhpcy5fZXhwYW5kZWRJbWFnZVRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1leHBhbmRlZF9fdGl0bGUnKTtcclxuICAgICAgICB0aGlzLl9leHBhZGVkSW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgICB0aGlzLl9leHBhZGVkSW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9leHBhbmRlZEltYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lRWxlbWVudCwgdGl0bGVFbGVtZW50LCBhdmF0YXJFbGVtZW50IH0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudCA9IG5hbWVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRpdGxlRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50ID0gYXZhdGFyRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgICAgIHRoaXMuX2F2YXRhckVsZW1lbnQuc3JjID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgdGhpcy5fdXNlcklkID0gZGF0YS5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcklkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhdGFySW1nKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50LnNyYyA9IGRhdGEuYXZhdGFyO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gXCJlbGVtZW50c1wiO1xyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gXCIjY2FyZHNcIjtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGFnXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWFnZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9uYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9hYm91dFwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1DYXJkQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX2NhcmRcIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX3Byb2ZpbGVcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEltYWdlRXhwYW5kZWQgPSBcInBvcHVwX2ltYWdlLWV4cGFuZGVkXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cERlbGV0ZUNvbmZpcm1hdGlvbkNhcmQgPSBcInBvcHVwX2NvbmZpcm1hdGlvbi1kZWxldGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwUHJvZmlsZSA9IFwicG9wdXBfcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgYXZhdGFySW1hZ2UgPSBcInBvcHVwX3Byb2ZpbGUtaW1hZ2UtZWRpdFwiO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgY2FyZEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfbmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfYWJvdXRcIik7XHJcbmV4cG9ydCBjb25zdCBhdmF0YXJVcmxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3Byb2ZpbGVfbGlua1wiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwRm9ybVByb2ZpbGUgPSBcIi5wb3B1cF9fZm9ybV9wcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cENhcmQgPSBcInBvcHVwX2NhcmRcIjtcclxuZXhwb3J0IGNvbnN0IHBvcHVwRm9ybUNhcmQgPSBcIi5wb3B1cF9fZm9ybV9jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEF2YXRhckZvcm0gPSBcIi5wb3B1cF9fZm9ybS1wcm9maWxlLWltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBhdmF0YXJFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19waWN0dXJlXCIpXHJcbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XHJcbiAgICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19mb3JtXCIsXHJcbiAgICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fYnRuXCIsXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idG5faW5hY3RpdmVcIixcclxuICAgIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gICAgZXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXQtZXJyb3JfdmlzaWJsZVwiLFxyXG4gIH07XHJcbiAgICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cERlbGV0ZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzXCI7XHJcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgY2FyZEFkZEJ0bixcclxuICBwb3B1cEZvcm1DYXJkLFxyXG4gIHBvcHVwQ2FyZCxcclxuICBwb3B1cEZvcm1Qcm9maWxlLFxyXG4gIHByb2ZpbGVOYW1lSW5wdXQsXHJcbiAgcHJvZmlsZVRpdGxlSW5wdXQsXHJcbiAgcHJvZmlsZUVkaXRCdG4sXHJcbiAgcG9wdXBQcm9maWxlLFxyXG4gIGNhcmRUZW1wbGF0ZSxcclxuICBwb3B1cEltYWdlRXhwYW5kZWQsXHJcbiAgY2FyZHNDb250YWluZXIsXHJcbiAgcHJvZmlsZU5hbWUsXHJcbiAgcHJvZmlsZVRpdGxlLFxyXG4gIGZvcm1TZXR0aW5ncyxcclxuICBhdmF0YXJFZGl0QnRuLFxyXG4gIGF2YXRhckltYWdlLFxyXG4gIHByb2ZpbGVBdmF0YXJJbWFnZSxcclxuICBwb3B1cEF2YXRhckZvcm0sXHJcbiAgcG9wdXBEZWxldGVDb25maXJtYXRpb25DYXJkXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbml0aWFsaXppbmcgQXBpIENsYXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xM1wiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiNGJiNGY2NDktY2U0OS00ZTVmLTgxYzItYWMxMTlhYWM5ZTdkXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZW5kZXJpbmcgRGF0YSBmcm9tIEFwaSAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5jb25zdCBpbml0aWFsUHJvZmlsZUluZm8gPSBhcGkucmVuZGVyVXNlckluZm8oKTtcclxuY29uc3QgaW5pdGlhbENhcmRzID0gYXBpLnJlbmRlckNhcmQoKTtcclxuXHJcblByb21pc2UuYWxsKFtpbml0aWFsUHJvZmlsZUluZm8sIGluaXRpYWxDYXJkc10pXHJcbiAgLnRoZW4oKFt1c2VyRGF0YSwgY2FyZHNdKSA9PiB7XHJcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhjYXJkcy5yZXZlcnNlKCkpO1xyXG4gICAgdXNlci5zZXRVc2VySW5mbyh1c2VyRGF0YSk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICB9KVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQWRkaW5nIGFuZCBVcGRhdGluZyBDYXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGhhbmRsZUNhcmRDbGljazogKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwSW1hZ2Uub3BlbihkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRGVsZXRlQ2xpY2s6IChldnQpID0+IHtcclxuICAgICAgICBwb3B1cERlbGV0ZS5vcGVuKGV2dCwgZGF0YS5faWQpO1xyXG4gICAgICB9LFxyXG4gICAgICB1c2VyRGF0YTogdXNlci5nZXRVc2VySWQoKSxcclxuICAgICAgaGFuZGxlQ2FyZExpa2U6IHN0YXR1cyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA/IGFwaS5saWtlQ2FyZChkYXRhLl9pZCkgOiBhcGkucmVtb3ZlQ2FyZExpa2UoZGF0YS5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FyZFRlbXBsYXRlXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHNDb250YWluZXJcclxuKTtcclxuXHJcblxyXG4vLyBlbmFibGluZyBpbWFnZSBwb3B1cFxyXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwSW1hZ2VFeHBhbmRlZCk7XHJcbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vIGVuYWJsaW5nIGRlbGV0ZSBwb3B1cFxyXG5jb25zdCBwb3B1cERlbGV0ZSA9IG5ldyBQb3B1cERlbGV0ZUNhcmQoe1xyXG4gIHBvcHVwU2VsZWN0b3I6cG9wdXBEZWxldGVDb25maXJtYXRpb25DYXJkLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoY2FyZEVsZW1lbnQsIGNhcmRJZCkgPT4ge1xyXG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKS50aGVuKCgpID0+IHtcclxuICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlLmNsb3NlKCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICB9KVxyXG4gIH1cclxufSk7XHJcbnBvcHVwRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL2FkZGluZyBpbWFnZSBjYXJkIHRvIHRoZSBwYWdlXHJcbmNvbnN0IGltYWdlQ2FyZEZvcm1Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBwb3B1cENhcmQsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZENhcmQoZGF0YSlcclxuICAgIC50aGVuKCBjYXJkRGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpbWFnZUNhcmRGb3JtUG9wdXAuY2xvc2UoKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgIH0pXHJcbiAgfSxcclxufSk7XHJcblxyXG5pbWFnZUNhcmRGb3JtUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGNhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmdzLCBwb3B1cEZvcm1DYXJkKTtcclxuXHJcbmNhcmRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNhcmRBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjYXJkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBpbWFnZUNhcmRGb3JtUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBZGRpbmcgYW5kIFVwZGF0aW5nIFVzZXIgSW5mbyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBhZGRpbmcgdXNlciBpbmZvIFwiTmFtZVwiIGFuZCBcInRpdGxlXCIgdG8gdGhlIHBhZ2VcclxuY29uc3QgdXNlciA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZUVsZW1lbnQ6IHByb2ZpbGVOYW1lLFxyXG4gIHRpdGxlRWxlbWVudDogcHJvZmlsZVRpdGxlLFxyXG4gIGF2YXRhckVsZW1lbnQ6IHByb2ZpbGVBdmF0YXJJbWFnZVxyXG59KTtcclxuXHJcblxyXG5jb25zdCB1c2VySW5mb1BvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBwb3B1cFByb2ZpbGUsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZFVzZXJJbmZvKGRhdGEpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB1c2VyLnNldFVzZXJJbmZvKGRhdGEpO1xyXG4gICAgICB1c2VySW5mb1BvcHVwRm9ybS5jbG9zZSgpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbnVzZXJJbmZvUG9wdXBGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwcm9maWxlRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1TZXR0aW5ncywgcG9wdXBGb3JtUHJvZmlsZSk7XHJcbnByb2ZpbGVGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbnByb2ZpbGVFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VyLmdldFVzZXJJbmZvKCk7XHJcbiAgcHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XHJcbiAgcHJvZmlsZVRpdGxlSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS50aXRsZTtcclxuXHJcbiAgcHJvZmlsZUZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgdXNlckluZm9Qb3B1cEZvcm0ub3BlbigpO1xyXG59KTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXZhdGFyIFVwZGF0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmNvbnN0IGF2YXRhclVwZGF0ZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogYXZhdGFySW1hZ2UsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZEF2YXRhcihkYXRhKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdXNlci5zZXRBdmF0YXJJbWcoZGF0YSk7XHJcbiAgICAgIGF2YXRhclVwZGF0ZUZvcm0uY2xvc2UoZGF0YSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IGF2YXRhckZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtU2V0dGluZ3MsIHBvcHVwQXZhdGFyRm9ybSk7XHJcbmF2YXRhckZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hdmF0YXJFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYXZhdGFyVXBkYXRlRm9ybS5vcGVuKCk7XHJcbn0pXHJcblxyXG5hdmF0YXJVcGRhdGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJwYXJhbXMiLCJiYXNlVXJsIiwiaGVhZGVycyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJfY2hlY2tSZXNwb25zZSIsIm5ld1VzZXJJbmZvIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiYWJvdXQiLCJuZXdBdmF0YXIiLCJhdmF0YXIiLCJsaW5rIiwiY2FyZElkIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJkYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJ1c2VyRGF0YSIsImhhbmRsZUNhcmRMaWtlIiwiX3RleHQiLCJfbGluayIsIl91c2VyRGF0YSIsIl9saWtlZERhdGEiLCJsaWtlcyIsIl9saWtlQ291bnQiLCJsZW5ndGgiLCJfY2FyZElkIiwiX2lkIiwiX293bmVyTmFtZSIsIm93bmVyIiwiX293bmVySWQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZURlbGV0ZUNsaWNrIiwiX2hhbmRsZUNhcmRMaWtlIiwiX2NhcmRTZWxlY3RvciIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiX2RlbGV0ZUJ0biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX3RvZ2dsZUxpa2VTdGF0dXMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsIl91cGRhdGVMaWtlc1Nob3duIiwiY2F0Y2giLCJlcnIiLCJsaWtlQ291bnRFbGVtZW50IiwidGV4dENvbnRlbnQiLCJoYXNVc2VyTGlrZWQiLCJzb21lIiwiX3VzZXIiLCJhZGQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfc2V0TGlrZWRTdGF0dXMiLCJzcmMiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9pc1ZhbGlkIiwiX2V2ZW50TGlzdGVuZXJzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJfaGFuZGxlT3ZlcmxheUNsb3NlIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZUJ1dHRvbiIsIlBvcHVwRGVsZXRlQ2FyZCIsImZvcm1TdWJtaXRIYW5kbGVyIiwiX2Zvcm0iLCJfYnV0dG9uIiwiX2Zvcm1TdWJtaXRIYW5kbGVyIiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybSIsIl9pbnB1dEl0ZW1zIiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfZXhwYWRlZEltYWdlIiwiX2V4cGFuZGVkSW1hZ2VUaXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJpdGVtIiwiVXNlckluZm8iLCJuYW1lRWxlbWVudCIsInRpdGxlRWxlbWVudCIsImF2YXRhckVsZW1lbnQiLCJfbmFtZUVsZW1lbnQiLCJfdGl0bGVFbGVtZW50IiwiX2F2YXRhckVsZW1lbnQiLCJ0aXRsZSIsIl91c2VySWQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRUZW1wbGF0ZSIsInByb2ZpbGVOYW1lIiwicHJvZmlsZVRpdGxlIiwicHJvZmlsZUF2YXRhckltYWdlIiwicHJvZmlsZUlucHV0TmFtZSIsInByb2ZpbGVJbnB1dFRpdGxlIiwiZm9ybUNhcmRBZGRlciIsImZvcm1FZGl0UHJvZmlsZSIsInBvcHVwSW1hZ2VFeHBhbmRlZCIsInBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZCIsInBvcHVwUHJvZmlsZSIsImF2YXRhckltYWdlIiwicHJvZmlsZUVkaXRCdG4iLCJjYXJkQWRkQnRuIiwicHJvZmlsZU5hbWVJbnB1dCIsInByb2ZpbGVUaXRsZUlucHV0IiwiYXZhdGFyVXJsSW5wdXQiLCJwb3B1cEZvcm1Qcm9maWxlIiwicG9wdXBDYXJkIiwicG9wdXBGb3JtQ2FyZCIsInBvcHVwQXZhdGFyRm9ybSIsImF2YXRhckVkaXRCdG4iLCJmb3JtU2V0dGluZ3MiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiaW5pdGlhbFByb2ZpbGVJbmZvIiwicmVuZGVyVXNlckluZm8iLCJpbml0aWFsQ2FyZHMiLCJyZW5kZXJDYXJkIiwiYWxsIiwiY2FyZHMiLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsInVzZXIiLCJzZXRVc2VySW5mbyIsImNyZWF0ZUNhcmQiLCJjYXJkSW5zdGFuY2UiLCJwb3B1cEltYWdlIiwib3BlbiIsInBvcHVwRGVsZXRlIiwiZ2V0VXNlcklkIiwic3RhdHVzIiwibGlrZUNhcmQiLCJyZW1vdmVDYXJkTGlrZSIsIm5ld0NhcmQiLCJnZW5lcmF0ZUNhcmQiLCJhZGRJdGVtIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJkZWxldGVDYXJkIiwiaW1hZ2VDYXJkRm9ybVBvcHVwIiwic2VuZENhcmQiLCJjYXJkRGF0YSIsImNhcmRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInJlc2V0VmFsaWRhdGlvbiIsInVzZXJJbmZvUG9wdXBGb3JtIiwic2VuZFVzZXJJbmZvIiwicHJvZmlsZUZvcm1WYWxpZGF0b3IiLCJwcm9maWxlRGF0YSIsImdldFVzZXJJbmZvIiwiYXZhdGFyVXBkYXRlRm9ybSIsInNlbmRBdmF0YXIiLCJzZXRBdmF0YXJJbWciLCJhdmF0YXJGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==