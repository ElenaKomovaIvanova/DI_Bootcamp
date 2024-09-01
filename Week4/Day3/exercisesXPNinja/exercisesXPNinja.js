// let random_number = Math.floor(Math.random() * 101);
// for (let i = 0; i <= random_number; i++) {
//     console.log(i)
// }

// function capitString(stringIn) {
//     let stringI = String(stringIn);
//     let newEven = '';
//     let newOdd = '';
//     for (i = 0; i < stringI.length; i++) {
//         if (i % 2 === 0) {
//             newEven += stringI[i].toUpperCase();
//             newOdd += stringI[i].toLowerCase();
//         } else {
//             newEven += stringI[i].toLowerCase();
//             newOdd += stringI[i].toUpperCase();
//         }
//     }
//     console.log(newEven, newOdd);
// }

// capitString('abcdef');

// function isPalindrome(word) {
//     word = String(word);
//     let newWord = '';

//     for (let i = word.length - 1; i >= 0; i--) {
//         newWord += word[i];
//     }

//     if (word === newWord) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('hello')); // false

function biggestNumberInArray(arrayNumber) {
    let filteredArray = [];

    for (let i = 0; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === 'number') { 
            filteredArray.push(arrayNumber[i]);
        }
    }

    if (filteredArray.length === 0) {
        return 0; 
    }

    let max = Math.max(...filteredArray);
    return max;
}

const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

console.log(biggestNumberInArray(array));  // 100
console.log(biggestNumberInArray(array2)); // 4
console.log(biggestNumberInArray(array3)); // 0

