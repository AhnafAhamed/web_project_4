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

      return fetch("".concat(this.baseUrl, "/cards/").concat(cardId), {
        headers: this.headers,
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

        _this2._updateLikesShown(data);
      }).catch(function (err) {
        return console.log("Error ".concat(err));
      });
    }
  }, {
    key: "_updateLikesShown",
    value: function _updateLikesShown(data) {
      var likeCountElement = this._element.querySelector('.elements__like-counter');

      likeCountElement.textContent = data.likes.length;
    }
  }, {
    key: "_setLikedStatus",
    value: function _setLikedStatus() {
      var _this3 = this;

      this._element.querySelector('.elements__like-counter').textContent = this._likeCount;

      var hasUserLiked = this._likedData.some(function (likes) {
        return likes._id === _this3._ownerId;
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
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("popup_open");

      document.removeEventListener('keyup', this._handleEscClose);
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
  avatarFormValidator.resetValidation();
  avatarUpdateForm.open();
});
avatarUpdateForm.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBSkgsQ0FJUyxVQUFDQyxHQUFELEVBQVM7QUFDaEJYLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixrQkFBc0JVLEdBQXRCO0FBQ0QsS0FORDtBQU9EO0FBVndDLENBQWxCLENBQXpCO0FBYUEsSUFBTThKLG1CQUFtQixHQUFHLElBQUluSixpRUFBSixDQUFrQnlHLDZEQUFsQixFQUFnQ0YsZ0VBQWhDLENBQTVCO0FBQ0E0QyxtQkFBbUIsQ0FBQ1YsZ0JBQXBCO0FBQ0FqQywrRUFBQSxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDMkMsRUFBQUEsbUJBQW1CLENBQUNULGVBQXBCO0FBQ0FNLEVBQUFBLGdCQUFnQixDQUFDdEIsSUFBakI7QUFDRCxDQUhEO0FBS0FzQixnQkFBZ0IsQ0FBQ2IsaUJBQWpCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gcGFyYW1zLmJhc2VVcmwsXHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gcGFyYW1zLmhlYWRlcnNcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tSZXNwb25zZShyZXMpIHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyAnL3VzZXJzL21lJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgJy9jYXJkcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1Jlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRVc2VySW5mbyhuZXdVc2VySW5mbykge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyAnL3VzZXJzL21lJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmV3VXNlckluZm8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGFib3V0OiBuZXdVc2VySW5mby5hYm91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQXZhdGFyKG5ld0F2YXRhcikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyAnL3VzZXJzL21lL2F2YXRhcicsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogbmV3QXZhdGFyLmF2YXRhclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQ2FyZCh7bmFtZSwgbGlua30pIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgJy9jYXJkcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlrZUNhcmQoY2FyZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FyZExpa2UoY2FyZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrUmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoeyBkYXRhLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUNsaWNrLCB1c2VyRGF0YSwgaGFuZGxlQ2FyZExpa2UgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyRGF0YSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIHRoaXMuX2xpa2VkRGF0YSA9IGRhdGEubGlrZXM7XHJcbiAgICAgICAgdGhpcy5fbGlrZUNvdW50ID0gZGF0YS5saWtlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fY2FyZElkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgdGhpcy5fb3duZXJOYW1lID0gZGF0YS5vd25lci5uYW1lO1xyXG4gICAgICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZExpa2UgPSBoYW5kbGVDYXJkTGlrZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9kZWxldGVCdG4gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fZGVsZXRlLWljb24nKTtcclxuXHJcbiAgICAgICAgaWYoISh0aGlzLl9vd25lcklkID09PSB0aGlzLl91c2VyRGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZUJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX293bmVySWQpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyRGF0YSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayhldnQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faGVhcnQtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b2dnbGVMaWtlU3RhdHVzKGV2dCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBfdG9nZ2xlTGlrZVN0YXR1cyhldnQpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkTGlrZSghZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnRzX19oZWFydC1pY29uX2xpa2VkJykpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2VsZW1lbnRzX19oZWFydC1pY29uX2xpa2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpa2VzU2hvd24oZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJ9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVMaWtlc1Nob3duKGRhdGEpIHtcclxuICAgICAgY29uc3QgbGlrZUNvdW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19saWtlLWNvdW50ZXInKTtcclxuICAgICAgbGlrZUNvdW50RWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubGlrZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRMaWtlZFN0YXR1cygpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2UtY291bnRlcicpLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZUNvdW50O1xyXG5cclxuICAgICAgY29uc3QgaGFzVXNlckxpa2VkID0gdGhpcy5fbGlrZWREYXRhLnNvbWUoKGxpa2VzKSA9PiBsaWtlcy5faWQgPT09IHRoaXMuX293bmVySWQpO1xyXG5cclxuICAgICAgaWYoaGFzVXNlckxpa2VkKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2hlYXJ0LWljb24nKS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50c19faGVhcnQtaWNvbl9saWtlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0TGlrZWRTdGF0dXMoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19faW1hZ2VcIikuc3JjID0gdGhpcy5fbGluaztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RleHQ7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1FbGVtZW50KTtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IHNldHRpbmdzLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2V2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cFNlbGVjdG9yfWApO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZihldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlT3ZlcmxheUNsb3NlKGV2dCkge1xyXG4gICAgICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlLWJ0blwiKTtcclxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9vcGVuJykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNhcmQgZXh0ZW5kcyBQb3B1cHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgZm9ybVN1Ym1pdEhhbmRsZXIgfSkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J0bl9jb25maXJtYXRpb24tZGVsZXRlXCIpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyID0gZm9ybVN1Ym1pdEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihldnQsIGNhcmRJZCkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnWWVzJztcclxuICAgICAgICB0aGlzLl9jYXJkSWQgPSBjYXJkSWQ7XHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZ0ID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGluZy4uLic7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2NhcmQsIHRoaXMuX2NhcmRJZCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBmb3JtU3VibWl0SGFuZGxlciB9KXtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idG5cIik7XHJcbiAgICAgICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIgPSBmb3JtU3VibWl0SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRJdGVtcyA9IEFycmF5LmZyb20odGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKSk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dEl0ZW1zLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZ0ID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmluZy4uLlwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIlxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBvcGVuKCB7IGxpbmssIG5hbWUgfSApIHtcclxuICAgICAgICB0aGlzLl9leHBhZGVkSW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLWV4cGFuZGVkX19pbWFnZScpO1xyXG4gICAgICAgIHRoaXMuX2V4cGFuZGVkSW1hZ2VUaXRsZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtZXhwYW5kZWRfX3RpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5fZXhwYWRlZEltYWdlLnNyYyA9IGxpbms7XHJcbiAgICAgICAgdGhpcy5fZXhwYWRlZEltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fZXhwYW5kZWRJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lclNlbGVjdG9yfWApO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbShlbGVtZW50KXtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtcyhpdGVtcykge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZUVsZW1lbnQsIHRpdGxlRWxlbWVudCwgYXZhdGFyRWxlbWVudCB9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBuYW1lRWxlbWVudDtcclxuICAgICAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aXRsZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyRWxlbWVudCA9IGF2YXRhckVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50LnNyYyA9IGRhdGEuYXZhdGFyO1xyXG4gICAgICAgIHRoaXMuX3VzZXJJZCA9IGRhdGEuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF2YXRhckltZyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyRWxlbWVudC5zcmMgPSBkYXRhLmF2YXRhcjtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lciA9IFwiZWxlbWVudHNcIjtcclxuZXhwb3J0IGNvbnN0IGNhcmRUZW1wbGF0ZSA9IFwiI2NhcmRzXCI7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RhZ1wiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVBdmF0YXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW1hZ2VcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfbmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfYWJvdXRcIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtQ2FyZEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybV9jYXJkXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybV9wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZUV4cGFuZGVkID0gXCJwb3B1cF9pbWFnZS1leHBhbmRlZFwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBEZWxldGVDb25maXJtYXRpb25DYXJkID0gXCJwb3B1cF9jb25maXJtYXRpb24tZGVsZXRlXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cFByb2ZpbGUgPSBcInBvcHVwX3Byb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IGF2YXRhckltYWdlID0gXCJwb3B1cF9wcm9maWxlLWltYWdlLWVkaXRcIjtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGNhcmRBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX2Fib3V0XCIpO1xyXG5leHBvcnQgY29uc3QgYXZhdGFyVXJsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9wcm9maWxlX2xpbmtcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEZvcm1Qcm9maWxlID0gXCIucG9wdXBfX2Zvcm1fcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBDYXJkID0gXCJwb3B1cF9jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEZvcm1DYXJkID0gXCIucG9wdXBfX2Zvcm1fY2FyZFwiO1xyXG5leHBvcnQgY29uc3QgcG9wdXBBdmF0YXJGb3JtID0gXCIucG9wdXBfX2Zvcm0tcHJvZmlsZS1pbWFnZVwiO1xyXG5leHBvcnQgY29uc3QgYXZhdGFyRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGljdHVyZVwiKVxyXG5leHBvcnQgY29uc3QgZm9ybVNldHRpbmdzID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J0blwiLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnRuX2luYWN0aXZlXCIsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICAgIGVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0LWVycm9yX3Zpc2libGVcIixcclxuICB9O1xyXG4gICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qc1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNhcmRBZGRCdG4sXHJcbiAgcG9wdXBGb3JtQ2FyZCxcclxuICBwb3B1cENhcmQsXHJcbiAgcG9wdXBGb3JtUHJvZmlsZSxcclxuICBwcm9maWxlTmFtZUlucHV0LFxyXG4gIHByb2ZpbGVUaXRsZUlucHV0LFxyXG4gIHByb2ZpbGVFZGl0QnRuLFxyXG4gIHBvcHVwUHJvZmlsZSxcclxuICBjYXJkVGVtcGxhdGUsXHJcbiAgcG9wdXBJbWFnZUV4cGFuZGVkLFxyXG4gIGNhcmRzQ29udGFpbmVyLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG4gIHByb2ZpbGVUaXRsZSxcclxuICBmb3JtU2V0dGluZ3MsXHJcbiAgYXZhdGFyRWRpdEJ0bixcclxuICBhdmF0YXJJbWFnZSxcclxuICBwcm9maWxlQXZhdGFySW1hZ2UsXHJcbiAgcG9wdXBBdmF0YXJGb3JtLFxyXG4gIHBvcHVwRGVsZXRlQ29uZmlybWF0aW9uQ2FyZFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5pdGlhbGl6aW5nIEFwaSBDbGFzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTNcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBcIjRiYjRmNjQ5LWNlNDktNGU1Zi04MWMyLWFjMTE5YWFjOWU3ZFwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVuZGVyaW5nIERhdGEgZnJvbSBBcGkgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuY29uc3QgaW5pdGlhbFByb2ZpbGVJbmZvID0gYXBpLnJlbmRlclVzZXJJbmZvKCk7XHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IGFwaS5yZW5kZXJDYXJkKCk7XHJcblxyXG5Qcm9taXNlLmFsbChbaW5pdGlhbFByb2ZpbGVJbmZvLCBpbml0aWFsQ2FyZHNdKVxyXG4gIC50aGVuKChbdXNlckRhdGEsIGNhcmRzXSkgPT4ge1xyXG4gICAgY2FyZExpc3QucmVuZGVySXRlbXMoY2FyZHMucmV2ZXJzZSgpKTtcclxuICAgIHVzZXIuc2V0VXNlckluZm8odXNlckRhdGEpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgfSlcclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFkZGluZyBhbmQgVXBkYXRpbmcgQ2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBwb3B1cEltYWdlLm9wZW4oZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZURlbGV0ZUNsaWNrOiAoZXZ0KSA9PiB7XHJcbiAgICAgICAgcG9wdXBEZWxldGUub3BlbihldnQsIGRhdGEuX2lkKTtcclxuICAgICAgfSxcclxuICAgICAgdXNlckRhdGE6IHVzZXIuZ2V0VXNlcklkKCksXHJcbiAgICAgIGhhbmRsZUNhcmRMaWtlOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA/IGFwaS5saWtlQ2FyZChkYXRhLl9pZCkgOiBhcGkucmVtb3ZlQ2FyZExpa2UoZGF0YS5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FyZFRlbXBsYXRlXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHNDb250YWluZXJcclxuKTtcclxuXHJcblxyXG4vLyBlbmFibGluZyBpbWFnZSBwb3B1cFxyXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwSW1hZ2VFeHBhbmRlZCk7XHJcbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vIGVuYWJsaW5nIGRlbGV0ZSBwb3B1cFxyXG5jb25zdCBwb3B1cERlbGV0ZSA9IG5ldyBQb3B1cERlbGV0ZUNhcmQoe1xyXG4gIHBvcHVwU2VsZWN0b3I6cG9wdXBEZWxldGVDb25maXJtYXRpb25DYXJkLFxyXG4gIGZvcm1TdWJtaXRIYW5kbGVyOiAoY2FyZEVsZW1lbnQsIGNhcmRJZCkgPT4ge1xyXG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKS50aGVuKCgpID0+IHtcclxuICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlLmNsb3NlKCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICB9KVxyXG4gIH1cclxufSk7XHJcbnBvcHVwRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL2FkZGluZyBpbWFnZSBjYXJkIHRvIHRoZSBwYWdlXHJcbmNvbnN0IGltYWdlQ2FyZEZvcm1Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBwb3B1cENhcmQsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZENhcmQoZGF0YSlcclxuICAgIC50aGVuKCBjYXJkRGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpbWFnZUNhcmRGb3JtUG9wdXAuY2xvc2UoKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcclxuICAgIH0pXHJcbiAgfSxcclxufSk7XHJcblxyXG5pbWFnZUNhcmRGb3JtUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGNhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmdzLCBwb3B1cEZvcm1DYXJkKTtcclxuXHJcbmNhcmRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNhcmRBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjYXJkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBpbWFnZUNhcmRGb3JtUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBZGRpbmcgYW5kIFVwZGF0aW5nIFVzZXIgSW5mbyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBhZGRpbmcgdXNlciBpbmZvIFwiTmFtZVwiIGFuZCBcInRpdGxlXCIgdG8gdGhlIHBhZ2VcclxuY29uc3QgdXNlciA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZUVsZW1lbnQ6IHByb2ZpbGVOYW1lLFxyXG4gIHRpdGxlRWxlbWVudDogcHJvZmlsZVRpdGxlLFxyXG4gIGF2YXRhckVsZW1lbnQ6IHByb2ZpbGVBdmF0YXJJbWFnZVxyXG59KTtcclxuXHJcblxyXG5jb25zdCB1c2VySW5mb1BvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBwb3B1cFByb2ZpbGUsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZFVzZXJJbmZvKGRhdGEpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB1c2VyLnNldFVzZXJJbmZvKGRhdGEpO1xyXG4gICAgICB1c2VySW5mb1BvcHVwRm9ybS5jbG9zZSgpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbnVzZXJJbmZvUG9wdXBGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwcm9maWxlRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1TZXR0aW5ncywgcG9wdXBGb3JtUHJvZmlsZSk7XHJcbnByb2ZpbGVGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbnByb2ZpbGVFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VyLmdldFVzZXJJbmZvKCk7XHJcbiAgcHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XHJcbiAgcHJvZmlsZVRpdGxlSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS50aXRsZTtcclxuXHJcbiAgcHJvZmlsZUZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgdXNlckluZm9Qb3B1cEZvcm0ub3BlbigpO1xyXG59KTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXZhdGFyIFVwZGF0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmNvbnN0IGF2YXRhclVwZGF0ZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogYXZhdGFySW1hZ2UsXHJcbiAgZm9ybVN1Ym1pdEhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICBhcGkuc2VuZEF2YXRhcihkYXRhKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdXNlci5zZXRBdmF0YXJJbWcoZGF0YSk7XHJcbiAgICAgIGF2YXRhclVwZGF0ZUZvcm0uY2xvc2UoZGF0YSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IGF2YXRhckZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtU2V0dGluZ3MsIHBvcHVwQXZhdGFyRm9ybSk7XHJcbmF2YXRhckZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hdmF0YXJFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYXZhdGFyRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBhdmF0YXJVcGRhdGVGb3JtLm9wZW4oKTtcclxufSlcclxuXHJcbmF2YXRhclVwZGF0ZUZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuIl0sIm5hbWVzIjpbIkFwaSIsInBhcmFtcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsIl9jaGVja1Jlc3BvbnNlIiwibmV3VXNlckluZm8iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJhYm91dCIsIm5ld0F2YXRhciIsImF2YXRhciIsImxpbmsiLCJjYXJkSWQiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwidXNlckRhdGEiLCJoYW5kbGVDYXJkTGlrZSIsIl90ZXh0IiwiX2xpbmsiLCJfdXNlckRhdGEiLCJfbGlrZWREYXRhIiwibGlrZXMiLCJfbGlrZUNvdW50IiwibGVuZ3RoIiwiX2NhcmRJZCIsIl9pZCIsIl9vd25lck5hbWUiLCJvd25lciIsIl9vd25lcklkIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVDbGljayIsIl9oYW5kbGVDYXJkTGlrZSIsIl9jYXJkU2VsZWN0b3IiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9kZWxldGVCdG4iLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl90b2dnbGVMaWtlU3RhdHVzIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJfdXBkYXRlTGlrZXNTaG93biIsImNhdGNoIiwiZXJyIiwibGlrZUNvdW50RWxlbWVudCIsInRleHRDb250ZW50IiwiaGFzVXNlckxpa2VkIiwic29tZSIsImFkZCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9zZXRMaWtlZFN0YXR1cyIsInNyYyIsImFsdCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiaW5wdXRMaXN0IiwiYnV0dG9uRWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2lzVmFsaWQiLCJfZXZlbnRMaXN0ZW5lcnMiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIl9oYW5kbGVPdmVybGF5Q2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlQnV0dG9uIiwiUG9wdXBEZWxldGVDYXJkIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9idXR0b24iLCJfZm9ybVN1Ym1pdEhhbmRsZXIiLCJfY2FyZCIsInBhcmVudEVsZW1lbnQiLCJQb3B1cFdpdGhGb3JtIiwiX2lucHV0SXRlbXMiLCJfaW5wdXRWYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9leHBhZGVkSW1hZ2UiLCJfZXhwYW5kZWRJbWFnZVRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIml0ZW0iLCJVc2VySW5mbyIsIm5hbWVFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiYXZhdGFyRWxlbWVudCIsIl9uYW1lRWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJfYXZhdGFyRWxlbWVudCIsInRpdGxlIiwiX3VzZXJJZCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZFRlbXBsYXRlIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlVGl0bGUiLCJwcm9maWxlQXZhdGFySW1hZ2UiLCJwcm9maWxlSW5wdXROYW1lIiwicHJvZmlsZUlucHV0VGl0bGUiLCJmb3JtQ2FyZEFkZGVyIiwiZm9ybUVkaXRQcm9maWxlIiwicG9wdXBJbWFnZUV4cGFuZGVkIiwicG9wdXBEZWxldGVDb25maXJtYXRpb25DYXJkIiwicG9wdXBQcm9maWxlIiwiYXZhdGFySW1hZ2UiLCJwcm9maWxlRWRpdEJ0biIsImNhcmRBZGRCdG4iLCJwcm9maWxlTmFtZUlucHV0IiwicHJvZmlsZVRpdGxlSW5wdXQiLCJhdmF0YXJVcmxJbnB1dCIsInBvcHVwRm9ybVByb2ZpbGUiLCJwb3B1cENhcmQiLCJwb3B1cEZvcm1DYXJkIiwicG9wdXBBdmF0YXJGb3JtIiwiYXZhdGFyRWRpdEJ0biIsImZvcm1TZXR0aW5ncyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJpbml0aWFsUHJvZmlsZUluZm8iLCJyZW5kZXJVc2VySW5mbyIsImluaXRpYWxDYXJkcyIsInJlbmRlckNhcmQiLCJhbGwiLCJjYXJkcyIsImNhcmRMaXN0IiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwidXNlciIsInNldFVzZXJJbmZvIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsInBvcHVwSW1hZ2UiLCJvcGVuIiwicG9wdXBEZWxldGUiLCJnZXRVc2VySWQiLCJzdGF0dXMiLCJsaWtlQ2FyZCIsInJlbW92ZUNhcmRMaWtlIiwibmV3Q2FyZCIsImdlbmVyYXRlQ2FyZCIsImFkZEl0ZW0iLCJzZXRFdmVudExpc3RlbmVycyIsImRlbGV0ZUNhcmQiLCJpbWFnZUNhcmRGb3JtUG9wdXAiLCJzZW5kQ2FyZCIsImNhcmREYXRhIiwiY2FyZEZvcm1WYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwicmVzZXRWYWxpZGF0aW9uIiwidXNlckluZm9Qb3B1cEZvcm0iLCJzZW5kVXNlckluZm8iLCJwcm9maWxlRm9ybVZhbGlkYXRvciIsInByb2ZpbGVEYXRhIiwiZ2V0VXNlckluZm8iLCJhdmF0YXJVcGRhdGVGb3JtIiwic2VuZEF2YXRhciIsInNldEF2YXRhckltZyIsImF2YXRhckZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9