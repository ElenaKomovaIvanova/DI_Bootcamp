let message: string = "Hello, World!";
console.log(message);

const age: number = 30;
console.log(age);

let personName: string = 'Elena';
console.log(personName);

let id: string | number;
id = 5;
console.log(id);
id = "Jon";
console.log(id);

function checkNumber(num: number): string {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

const result1 = checkNumber(10);
console.log(result1);

const result2 = checkNumber(-5);
console.log(result2);

const result3 = checkNumber(0);
console.log(result3);

function getDetails(name: string, age: number): [string, number, string] {
    const message = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, message];
}

const details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

const person = createPerson("Alice", 25);
console.log(person);


// const inputElement = document.getElementById("myInput") as HTMLInputElement;
//
// if (inputElement) {
//     inputElement.value = "Hello World!";
// }

function getAction(role: string): string {
    switch (role) {
        case 'admin':
            return 'Manage users and settings';
        case 'editor':
            return 'Edit content';
        case 'viewer':
            return 'View content';
        case 'guest':
            return 'Limited access';
        case 'unknown':
            return 'Invalid role';
        default:
            return 'Role not recognized';
    }
}

console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role


function greet(): string;
function greet(name: string): string;


function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return `Hello, Stranger!`;
    }
}
console.log(greet());
console.log(greet("Alice"));


