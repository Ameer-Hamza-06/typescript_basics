const User = {
    name: "Hamza",
    email: "h@h.com",
    isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: "Hamza", isPaid: true, email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
    return { name: "Reactjs", price: 299 };
}

// type Aliases

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("Coordinate x value is:" + pt.x);
    console.log("Coordinate y value is:" + pt.y);
}

printCoord({ x: 100, y: 100 });

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
};

let myUser: User = {
    _id: "abc-defg",
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: false,
};

myUser.email = "h@h.com";
