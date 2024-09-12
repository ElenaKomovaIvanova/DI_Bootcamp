import { users } from "./data.js"


function getAverageAge(arr) {
    const sum = arr.reduce((acc, p) => acc + p.age, 0);
    const averageAge = sum / arr.length;
    return averageAge;
  }
console.log(getAverageAge(users));

  