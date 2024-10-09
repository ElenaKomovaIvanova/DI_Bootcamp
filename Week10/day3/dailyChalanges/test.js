function processInput(input) {
    if (typeof input === "number") {
        return input * input;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "boolean") {
        return !input;
    }
    return input; // или можно выбросить ошибку
}
console.log(processInput(9)); // Output: 25
console.log(processInput("hello")); // Output: HELLO
console.log(processInput(true)); // Output: false
console.log(processInput(false)); // Output: true
