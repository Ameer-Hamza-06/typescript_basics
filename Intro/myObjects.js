var User = {
    name: "hamza",
    email: "hamza@h.com",
    isActive: true,
};
// function createUser({ name: string, isPaid: boolean }) {}
// const newUser = { name: "Hamza", isPaid: false, email: "h@h.com" };
// createUser(newUser);
function createCourse() {
    return { name: "hamza", price: 500 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
