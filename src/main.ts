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

// INTERFACES:

interface User {
    name: string;
    age?: number;
}
const user3: User = {
    name: 'Frank',
    age: 23,
}

// FUNCTIONS IN INTERFACES
