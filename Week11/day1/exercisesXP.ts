type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;


const personWithAddress: PersonWithAddress = {
    name: "John",
    age: 30,
    street: "123 Main St",
    city: "New York"
};

console.log(personWithAddress);


function describeValue(value: string | number): string {
    if (typeof value === "number") {
        return "This is a number"
    } else if (typeof value === "string") {
        return "This is a string"
    }
}

console.log(describeValue(42));
console.log(describeValue("Hello"));


let someValue: any = "any" as string;
console.log(someValue.length);


function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
}

console.log(getFirstElement(["hello", 42]));


function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
}

logLength("Hello"); // Output: 5

logLength([1, 2, 3, 4]); // Output: 4

logLength({length: 10, value: "Some value"}); // Output: 10


type Person2 = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
};

type Employee = Person2 & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} works as ${employee.position} in the ${employee.department} department.`;
    }
}

const manager: Employee = {name: "Alice", age: 35, position: "Manager", department: "HR"};
const developer: Employee = {name: "Bob", age: 28, position: "Developer", department: "IT"};

console.log(describeEmployee(manager));
console.log(describeEmployee(developer));


function formatInput<T extends { toString(): string }>(input: T): string {
    let formatted: string = input.toString() as string;
    return `Formatted: ${formatted}`;
}

console.log(formatInput(123));
console.log(formatInput("Hello"));

