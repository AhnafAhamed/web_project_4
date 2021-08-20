export default class Api {
    constructor(params) {
        this.baseUrl = params.baseUrl,
        this.headers = params.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Error")
    }

    renderUserInfo() {
        return fetch(this.baseUrl + '/users/me', {
            headers: this.headers,
            method: 'GET'
        })
        .then((res) => this._checkResponse(res));
    }

    renderCard() {
        return fetch(this.baseUrl + '/cards', {
            headers: this.headers,
            method: 'GET'
        })
        .then((res) => this._checkResponse(res));
    }

    sendUserInfo(newUserInfo) {
        return fetch(this.baseUrl + '/users/me', {
            headers: this.headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: newUserInfo.name,
                about: newUserInfo.about
            })
        })
        .then((res) => this._checkResponse(res));
    }

    sendAvatar(newAvatar) {
        return fetch(this.baseUrl + '/users/me/avatar', {
            headers: this.headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: newAvatar.avatar
            })
        })
        .then((res) => this._checkResponse(res));
    }

    sendCard({name, link}) {
        return fetch(this.baseUrl + '/cards', {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify({
                name,
                link
            })
        })
        .then((res) => this._checkResponse(res));
    }

    likeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            headers: this.headers,
            method: 'PUT'
        })
        .then((res) => this._checkResponse(res));
    }

    removeCardLike(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            headers: this.headers,
            method: 'DELETE'
        })
        .then((res) => this._checkResponse(res));
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            headers: this.headers,
            method: 'DELETE'
        })
        .then((res) => this._checkResponse(res));
    }
    

}