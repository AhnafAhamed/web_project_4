export default class UserAvatar{
    constructor( {avatarElement} ) {
        this._avatarElement = avatarElement;
    }

    getUserAvatar() {
        this.userData = {
            avatar: this._avatarElement.src
        };
        return this.userData;
    }

    setUserAvatar(data) {
        this._avatarElement.src = data.avatar;
    }
}