interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrial: () => string
    startTrial(): string;
    getCoupon(couponname: string, value: number): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const hamza: Admin = {
    dbId: 3,
    role: "admin",
    email: "hamza@gmail.com",
    githubToken: "github",
    userId: 55,
    startTrial: () => {
        return "hello";
    },
    getCoupon: (name: "movieticket", off: 100) => {
        return 55;
    },
};

export {};
