// let landscape = function() {

//     let result = "";
   
//     let flat = function(x) {
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
   
//     let mountain = function(x) {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }
   
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
//    }
   

// let landscape = () => {

//     let result = "";
  
//     let flat = x => {
//       for(let count = 0; count < x; count++) {
//         result += "_";
//       }
//     };
  
//     let mountain = x => {
//       result += "/";
//       for(let counter = 0; counter < x; counter++) {
//         result += "'";
//       }
//       result += "\\";
//     };
  
//     flat(4);
//     mountain(4);
//     flat(4);
  
//     return result;
//   };
  
//  console.log(landscape());

// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1));

// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// console.log(add5(12));

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10));