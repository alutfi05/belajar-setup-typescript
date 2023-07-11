class User {
    public email: string;
    name: string; // default is public
    private city: string = 'Depok'; // cannot access and set
    // readonly city: string = 'Depok'; // can access but cannot set

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

// another option
class User2 {
    private _courseCount = 1;
    readonly city: string = 'Depok';

    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}

    private deleteToken() {
        console.log('Token Deleted');
    }

    // Getter
    get getAppleEmail(): string {
        return `Apple ${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    // Setter
    set courseCount(courseNumber: number) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }

        this._courseCount += courseNumber;
    }
}

const lutfi = new User('lutfi@gmail.com', 'lutfi');
// lutfi.city = 'Jakarta'; // error
// lutfi.city; // error

const laila = new User2('laila@gmail.com', 'laila', 'userXYZ');
console.log(laila.getAppleEmail);
console.log(laila.getCourseCount);

laila.courseCount = 10;
console.log(laila.getCourseCount);
