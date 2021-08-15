export default class Api {
    constructor() {
        this._baseUrl = "https://around.nomoreparties.co/v1/group-13",
        this._headers = {
            authorization: "4bb4f649-ce49-4e5f-81c2-ac119aac9e7d",
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    renderUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: 'GET'
        })
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`)
        })
    }

    renderAvatar() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`)
        })
    }

    renderCard() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`)
        })
    }

    sendUserInfo(newUserInfo) {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: newUserInfo.name,
                about: newUserInfo.about
            })
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
    }

    sendAvatar(newAvatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: newAvatar.avatar
            })
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
             console.log(`Error ${err}`)
        })
    }

    sendCard(newCard) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link
            })
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
    }

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: 'PUT'
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
    }

    removeCardLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
    }
    

}