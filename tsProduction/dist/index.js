"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "lahore";
    }
    deleteToken() {
        console.log("Token deleted!");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("You can't have less than one course");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hamza = new User("h@h.com", "hamza", "abc12");
// hamza.deleteToken()
