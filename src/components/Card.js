export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick, userData, handleCardLike }, cardSelector) {
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

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(true);
    
        this._element = cardElement;
    }

    _setEventListeners() {
        this._deleteBtn = this._element.querySelector('.elements__delete-icon');

        if(!(this._ownerId === this._user)) {
          this._deleteBtn.remove();
          console.log(this._ownerId)
          console.log(this._user)
        }else {
          this._deleteBtn.addEventListener('click', evt => {
            this._handleDeleteClick(evt);
          })
        }

        this._element.querySelector(".elements__heart-icon").addEventListener('click', evt => {
          this._toggleLikeStatus(evt);
        })

        this._element.querySelector(".elements__image").addEventListener("click", () => {
          this._handleCardClick();
        })
        
      }
    
    _toggleLikeStatus(evt) {
        this._handleCardLike(!evt.target.classList.contains('elements__heart-icon_liked'))
          .then(data => {
            evt.target.classList.toggle('elements__heart-icon_liked');
            this._updateLikesShown(evt, data);
          })
          .catch(err => console.log(`Error ${err}`));
    }

    _updateLikesShown(evt, data) {
      const likeCountElement = this._element.querySelector('.elements__like-counter');
      likeCountElement.textContent = data.likes.length;
    }

    _setLikedStatus() {
      this._element.querySelector('.elements__like-counter').textContent = this._likeCount;

      const hasUserLiked = this._likedData.some(likes => likes._id === this._user);

      if(hasUserLiked) {
        this._element.querySelector('.elements__heart-icon').classList.add('elements__heart-icon_liked');
      }
    }
    
    generateCard() {
        this._getTemplate();
        this._setEventListeners();
        this._setLikedStatus();
    
        this._element.querySelector(".elements__title").textContent = this._text;
        this._element.querySelector(".elements__image").src = this._link;
        this._element.querySelector(".elements__image").alt = this._text;
    
        return this._element;
    }
}