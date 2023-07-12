const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3);
identityThree('lutfi');
identityThree(true);

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

console.log(identityFour<Bottle>({ brand: 'Coca - Cola', type: 3 }));

// Generics with array
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 5;
    return products[myIndex];
};

// Common Generics in JSX
// const getMoreSearchProducts = <T,>(products: T[]): T => {
//     // do some database operations
//     const myIndex = 5;
//     return products[myIndex];
// };
