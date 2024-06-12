let hell: string = 'world';

// FUNCTIONS:
const getFullName = (name: string, surname: string) => {
    return name + ' ' + surname
};

//OBJECTS:

const user: object = {
    name: 'Me',
    age: 99,
};

const user2 = {
    name: "Jerk",
}

// INTERFACES & FUNCTIONS IN INTERFACES:

interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}
const user3: UserInterface = {
    name: 'Frank',
    age: 23,
    getMessage() {
        return 'Welcome to hell ' + name;
    },
}


