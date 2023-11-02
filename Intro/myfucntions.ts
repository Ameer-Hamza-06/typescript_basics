function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

function toUpper(val: string) {
    return val.toUpperCase();
}

function signupUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(10);
toUpper("Hamza");
signupUser("Hamza", "hamza@gmail.com", true);
loginUser("h", "h@h.com");

// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
    return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};
