export class User {
    id: number;
    createDate: Date;
    addresses: String[];

    constructor(addresses: String[]) {
        this.createDate = new Date();
        this.addresses = addresses;
    }
}

let userDB: User[] = [];

export function createUser(user : User) {
    user.id = userDB.length + 1;
    userDB.push(user);
    console.log("Account Created: ",user);
    
    return user;
}

export function userExists(address: String[]): boolean {
    // Iterate over each user in the userDB array
    for (const user of userDB) {
        // Check if any of the user's addresses match the specified address
        if (user.addresses.some(addr => address.includes(addr))) {
            return true; // User with the specified address exists
        }
    }
    return false; // User with the specified address does not exist
}
