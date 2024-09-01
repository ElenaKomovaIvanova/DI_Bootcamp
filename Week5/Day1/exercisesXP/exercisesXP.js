// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console: the alert will show "inside the funcOne function 3"
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? an error because you can't reassign a `const` variable.


//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// This will alert the current value of global a 

// funcThree(); 
// The alert will show "inside the funcThree function 0"
// funcTwo();
//  changes a to 5
// funcThree(); 
// The alert will show "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// funcThree(); 
// The alert will show "inside the funcThree function 0"
// funcTwo();
// will throw an error 
// funcThree(); 
// The alert will show "inside the funcThree function 0"

//#3
// function funcFour() {
//     window.a = "hello"; 
// }
// assigns "hello" to the global a property

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour() 
// This sets the global ` to "hello"
// funcFive()
// The alert will show "inside the funcFive function hello"

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// The alert will show "inside the funcSix function test"
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? here will be no difference
// because const  like let in terms of scope


//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// The 1 alert will show "in the if block 5"
// The 2 alert will show "outside of the if block 2"
// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//  here will be no difference
// because const  like let in terms of scope

// function winBattle(){
//     return true;
// }

// const winBattle  = () => true;
// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);

// const isString = (value) => {
//     return(typeof(value) === 'string' ? true : false )
// }

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false

// const sumFunction = (num1, num2) => {
//     return num1 + num2
// }

// console.log(sumFunction(445, 10))

// function convertKgToGrams(weightKg) {
//     return weightKg * 1000;
// }
// Invoke the function
// console.log(convertKgToGrams(5)); // 5000

// const convertKgToGramsExpression = function(weightKg) {
//     return weightKg * 1000;
// };
// Invoke the function
// console.log(convertKgToGramsExpression(5)); // 5000
//functions stored in variables do not need function names

// const convertKgToGramsArrow = (weightKg) => weightKg * 1000;
// Invoke the function
// console.log(convertKgToGramsArrow(5)); // 5000


// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


// (function (numberChildren, namePartner, location, job) {
//     console.log(`You will be a ${job} in ${location}, 
//     and married to ${namePartner} with ${numberChildren} kids.`)
// })(4, "Sarah", "TA", "Doctor")


// function makeJuice(size) {

//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
//         console.log(message)
//     }
//     addIngredients('apple', 'banana', 'strawberry');
// }

// makeJuice('medium');


function makeJuice(size) {
    let ingredients = [];
    
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        console.log(message)
    }

    addIngredients('apple', 'banana', 'strawberry');
    addIngredients('apple', 'banana', 'strawberry');
    displayJuice()

}

makeJuice('medium');
