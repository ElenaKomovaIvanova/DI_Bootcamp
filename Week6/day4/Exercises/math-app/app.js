const _ = require('lodash');
const math = require('./math');

const num1 = 5.6896;
const num2 = 10.6755;

const sum = math.add(num1, num2);
const multiply = math.multiply(num1, num2);

const roundedSum = _.round(sum, 2);
const roundedMultiply = _.round(multiply, 2);

console.log(`Sum: ${roundedSum}`);
console.log(`Multiply: ${roundedMultiply}`);