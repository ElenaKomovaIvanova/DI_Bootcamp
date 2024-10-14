var personWithAddress = {
    name: "John",
    age: 30,
    street: "123 Main St",
    city: "New York"
};
console.log(personWithAddress);
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else if (typeof value === "string") {
        return "This is a string";
    }
}
console.log(describeValue(42));
console.log(describeValue("Hello"));
var someValue = "any";
console.log(someValue.length);
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["hello", 42]));
function logLength(arg) {
    console.log(arg.length);
}
logLength("Hello"); // Output: 5
logLength([1, 2, 3, 4]); // Output: 4
logLength({ length: 10, value: "Some value" }); // Output: 10
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department.");
    }
    else if (employee.position === "Developer") {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
    else {
        return "".concat(employee.name, " works as ").concat(employee.position, " in the ").concat(employee.department, " department.");
    }
}
var manager = { name: "Alice", age: 35, position: "Manager", department: "HR" };
var developer = { name: "Bob", age: 28, position: "Developer", department: "IT" };
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
function formatInput(input) {
    // Утверждаем, что input может быть преобразован в строку
    var formatted = input.toString();
    // Пример форматирования
    return "Formatted: ".concat(formatted);
}
console.log(formatInput(123)); // Output: Formatted: 123
console.log(formatInput("Hello")); // Output: Formatted: Hello
