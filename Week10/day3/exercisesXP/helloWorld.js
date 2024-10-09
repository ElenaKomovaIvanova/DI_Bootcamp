var message = "Hello, World!";
console.log(message);
var age = 30;
console.log(age);
var personName = 'Elena';
console.log(personName);
var id;
id = 5;
console.log(id);
id = "Jon";
console.log(id);
function checkNumber(num) {
    if (num > 0) {
        return "The number is positive.";
    }
    else if (num < 0) {
        return "The number is negative.";
    }
    else {
        return "The number is zero.";
    }
}
var result1 = checkNumber(10);
console.log(result1);
var result2 = checkNumber(-5);
console.log(result2);
var result3 = checkNumber(0);
console.log(result3);
function getDetails(name, age) {
    var message = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, message];
}
var details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
var person = createPerson("Alice", 25);
console.log(person);
// const inputElement = document.getElementById("myInput") as HTMLInputElement;
//
// if (inputElement) {
//     inputElement.value = "Hello World!";
// }
function getAction(role) {
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
// function greet(): string;
// function greet(name: string): string;
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, Stranger!";
    }
}
console.log(greet());
console.log(greet("Alice"));
