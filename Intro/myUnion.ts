let score: number | string;

score = "5";

score = 5;

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let hamza: User | Admin = { name: "Hamza", id: 123 };

hamza = { username: "hamza", id: 999 };

function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}

// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, 2, "3", true];

let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle";
// seatAllotment = "crew";

export {};
