const processValue = (input: string | number): string | number => {
    if (typeof input === "string") {
        return input.split("").reverse().join("")
    } else if (typeof input === "number") {
        return `$${(input)}`;
    }
    return input;
};

console.log(processValue("hello"));
console.log(processValue(600));

function sumNumbersInArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === "number") {
            sum += item;
        }
    }
    return sum;
}

console.log(sumNumbersInArray([1, 'hello', 2, 'world', 3])); // Output: 6
console.log(sumNumbersInArray(['apple', 'banana', 5, 10])); // Output: 15
console.log(sumNumbersInArray(['text', 'another text']));   // Output: 0
console.log(sumNumbersInArray([1, 2, 3]));                   // Output: 6
console.log(sumNumbersInArray(['1', '2', '3']));             // Output: 0



type AdvancedUser = {
    name: string;
    age: number;
    address?: string;
};

function introduceAdvancedUser(user: AdvancedUser): string {
    let greeting = `Hello, my name is ${user.name} and I am ${user.age} years old.`;

    if (user.address) {
        greeting += ` I live at ${user.address}.`;
    }
    return greeting;
}

const user1: AdvancedUser = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};

const user2: AdvancedUser = {
    name: "Bob",
    age: 25
};

console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));


function welcomeUser(name: string, greeting?: string): string {
    if (!greeting) {
        greeting = "Hello";
    }

    return `${greeting}, ${name}!`;
}

console.log(welcomeUser("Alice")); // Output: Hello, Alice!
console.log(welcomeUser("Bob", "Welcome")); // Output: Welcome, Bob!

