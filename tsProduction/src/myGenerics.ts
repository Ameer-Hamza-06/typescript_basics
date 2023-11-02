const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean): number | boolean {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(10);

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: string;
}

// identityFour<Bottle>({});

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 5;
    return products[myIndex];
};

interface Database {
    name: string;
    email: string;
    password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    };
}

// anotherFunction(10, {});

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}
