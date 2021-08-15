export default class UserInfo {
    constructor({ nameElement, titleElement }) {
        this._nameElement = nameElement;
        this._titleElement = titleElement;
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
    }
}