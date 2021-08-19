export default class UserInfo {
    constructor({ nameElement, titleElement, avatarElement }) {
        this._nameElement = nameElement;
        this._titleElement = titleElement;
        this._avatarElement = avatarElement;
    }

    getUserInfo() {
        this.userData = {
            name: this._nameElement.textContent,
            title: this._titleElement.textContent,
        };
        return this.userData;
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._titleElement.textContent = data.about;
        this._avatarElement.src = data.avatar;
        this._userId = data._id;
    }

    getUserId() {
        return this._userId;
    }

    setAvatarImg(data) {
        this._avatarElement.src = data.avatar;
    }
}