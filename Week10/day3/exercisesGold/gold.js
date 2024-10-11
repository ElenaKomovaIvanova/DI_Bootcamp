var processValue = function (input) {
    if (typeof input === "string") {
        return input.split("").reverse().join("");
    }
    else if (typeof input === "number") {
        return "$".concat((input));
    }
    return input;
};
console.log(processValue("hello"));
console.log(processValue(600));
function sumNumbersInArray(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (typeof item === "number") {
            sum += item;
        }
    }
    return sum;
}
console.log(sumNumbersInArray([1, 'hello', 2, 'world', 3])); // Output: 6
console.log(sumNumbersInArray(['apple', 'banana', 5, 10])); // Output: 15
console.log(sumNumbersInArray(['text', 'another text'])); // Output: 0
console.log(sumNumbersInArray([1, 2, 3])); // Output: 6
console.log(sumNumbersInArray(['1', '2', '3'])); // Output: 0
function introduceAdvancedUser(user) {
    var greeting = "Hello, my name is ".concat(user.name, " and I am ").concat(user.age, " years old.");
    if (user.address) {
        greeting += " I live at ".concat(user.address, ".");
    }
    return greeting;
}
var user1 = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};
var user2 = {
    name: "Bob",
    age: 25
};
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));
function welcomeUser(name, greeting) {
    if (!greeting) {
        greeting = "Hello";
    }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(welcomeUser("Alice")); // Output: Hello, Alice!
console.log(welcomeUser("Bob", "Welcome")); // Output: Welcome, Bob!
