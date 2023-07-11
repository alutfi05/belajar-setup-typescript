class User {
    email: string;
    name: string;
    readonly city: string = 'Depok';

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const lutfi = new User('lutfi@gmail.com', 'lutfi');
// lutfi.city = 'Jakarta'; // error
