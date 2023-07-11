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
    readonly city: string = 'Depok';

    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}
}

const lutfi = new User('lutfi@gmail.com', 'lutfi');
// lutfi.city = 'Jakarta'; // error
// lutfi.city; // error

const laila = new User2('laila@gmail.com', 'laila', 'userXYZ');
