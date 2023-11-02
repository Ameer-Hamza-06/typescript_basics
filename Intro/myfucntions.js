"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signupUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("hamza");
signupUser("hamza", "h@gmail.com", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
