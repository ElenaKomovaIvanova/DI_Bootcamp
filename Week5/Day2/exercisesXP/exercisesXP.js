// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color}.`)
// });

// const message = colors.includes("Violet") ? "Yeah" : "No...";
// console.log(message);

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) => {
//     (index === 0 || index ===1 || index ===2) ? console.log(`${index + 1}${ordinal[index + 1]} choice is ${color}.`) : 
//     console.log(`${index + 1}${ordinal[0]} choice is ${color}.`)
// });

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]);
// ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// [ undefined, undefined ]

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

let fullStackResidentsNames = users.filter(user => user.role === 'Full Stack Resident').map(user => user.firstName);
console.log(fullStackResidentsNames);

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicPhrase = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(epicPhrase);


const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];


let passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

students.forEach(student => {
    student.isPassed ? console.log(`Good job ${student.name}, you passed the course in ${student.course}`) :null
});