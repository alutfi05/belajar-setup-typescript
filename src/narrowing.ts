function detectType(value: number | string) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }

    return value + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log(`Please provide ID`);
        return;
    }

    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}

const ahmadLutfi: Admin = {
    name: 'Ahmad Lutfi Rizki Patria',
    email: 'lutfi@gmail.com',
    isAdmin: true,
};

console.log(isAdminAccount(ahmadLutfi));

function logValue(value: Date | string) {
    if (value instanceof Date) {
        console.log(value.toUTCString());
    } else {
        console.log(value.toUpperCase());
    }
}

const date = new Date();

logValue(date);
logValue('hello');

type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return 'Fish food';
    } else {
        pet;
        return 'Bird food';
    }
}

const shark: Fish = {
    swim() {},
};

const eagle: Bird = {
    fly() {},
};

console.log(isFish(shark));
console.log(getFood(shark));

console.log(isFish(eagle));
console.log(getFood(eagle));

interface Circle {
    kind: 'circle';
    raduis: number;
}

interface Square {
    kind: 'square';
    side: number;
}

interface Rectangle {
    kind: 'rectangle';
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.raduis ** 2;
    } else if (shape.kind === 'square') {
        return shape.side * shape.side;
    } else {
        return shape.length * shape.width;
    }
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return `Area is ${Math.PI * shape.raduis ** 2}`;
        case 'square':
            return `Area is ${shape.side * shape.side}`;
        case 'rectangle':
            return `Area is ${shape.length * shape.width}`;
        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}

const ball: Circle = {
    kind: 'circle',
    raduis: 2,
};

const floor: Square = {
    kind: 'square',
    side: 5,
};

const wall: Rectangle = {
    kind: 'rectangle',
    length: 2,
    width: 3,
};

console.log(getShape(ball));
console.log(getShape(floor));
console.log(getShape(wall));

console.log(getArea(ball));
console.log(getArea(floor));
console.log(getArea(wall));
