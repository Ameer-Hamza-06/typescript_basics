// let user: (string | number)[] = ["hc", 1, 2]

let user: [string, number, boolean] = ["hc", 6, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [string, number];

let newUser: User = ["hamza@gmail.com", 2];

newUser[1] = 10;
newUser.push("test");

export {};
