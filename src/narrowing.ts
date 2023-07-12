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
