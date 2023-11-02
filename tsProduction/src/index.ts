class User {
    protected _courseCount = 1;
    readonly city: string = "lahore";
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}

    private deleteToken() {
        console.log("Token deleted!");
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("You can't have less than one course");
        }
        this._courseCount = courseNum;
    }
}

class subUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const hamza = new User("h@h.com", "hamza", "abc12");
// hamza.deleteToken()
