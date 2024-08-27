// function displayNumbersDivisible(){
//     let sum = 0
//     for(let i = 0; i < 500; i++) {
//         if (i % 23 == 0) {
//             sum += i;
//         }
//     }
//     return(sum);
// }
// console.log(displayNumbersDivisible())

// function displayNumbersDivisible(divisor){
//     let sum = 0
//     let arrayNumders = []
//     for(let i = 0; i < 500; i++) {
//         if (i % divisor === 0) {
//             arrayNumders.push(i)
//             sum += i;
//         }
//     }
//     return('all the numbers divisible by 3: ' + arrayNumders + '\ntheir sum: ' + sum);
// }
// console.log(displayNumbersDivisible(3))

// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }

// let shoppingList = ["banana", "orange", "apple"];
// function myBill() {
//     let sum = 0;
//     for (i = 0; i < shoppingList.length; i++) {
//         if (shoppingList[i] in stock && stock[shoppingList[i]] > 0) {
//             sum += prices[shoppingList[i]]
//         }
//     }
//     return(sum);
// }

// console.log(myBill());

// function changeEnough(itemPrice, amountOfChange) {
//     let sum_quarters = amountOfChange[0] * 15;
//     let sum_dimes = amountOfChange[1] * 10;
//     let sum_nickels = amountOfChange[2] * 5;
//     let sum_pennies = amountOfChange[3];
//     let sum = (sum_dimes + sum_nickels + sum_pennies + sum_quarters) / 100;
//     if (itemPrice <= sum) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(changeEnough(0.75, [0, 0, 20, 5]))


// function hotelCost() {
//     const hotelCostPerNight = 140;
//     let numberOfNights;

//     while (true) {
//         let input = prompt("Enter the number of nights: ");
//         numberOfNights = parseInt(input, 10);
//         if (!isNaN(numberOfNights) && numberOfNights > 0) {
//             break;
//         } else {
//             alert("Enter a valid number greater than 0.");
//         }
//     }

//     let totalHotelPrice = numberOfNights * hotelCostPerNight;
//     return totalHotelPrice;
// }

// function planeRideCost() {
//     const destinationLondonPrice = 183;
//     const destinationParisPrice = 220;
//     const otherDestinationPrice = 300;

//     let totalPlanePrice;
//     let destination = '';

//     while (true) {
//         destination = prompt("Enter the destination: ");
//         if (destination.length > 0) {
//             break;
//         } else {
//             alert("Enter a valid destination.");
//         }
//     }
//     if (destination == "London") {
//         totalPlanePrice = destinationLondonPrice;
//     } else if (destination == "Paris") {
//         totalPlanePrice = destinationParisPrice;
//     } else {
//         totalPlanePrice = otherDestinationPrice;
//     }
//     return totalPlanePrice;
// }


// function rentalCarCost() {
//     const carCostPerDay = 40;
//     const discount = 0.05;
//     let numberOfDays;
//     let totalCarPrice;
//     while (true) {
//         let input = prompt("Enter the number of days: ");
//         numberOfDays = parseInt(input, 10);
//         if (!isNaN(numberOfDays) && numberOfDays > 0) {
//             break;
//         } else {
//             alert("Enter a valid number greater than 0.");
//         }
//     }
//     if (numberOfDays > 10) {
//         totalCarPrice = (numberOfDays * carCostPerDay) * (1 - discount);
//     } else {
//         totalCarPrice = numberOfDays * carCostPerDay;
//     }
//     return totalCarPrice;
// }


// function totalVacationCost() {
//     let totalPlanePrice = planeRideCost();
//     let totalHotelPrice = hotelCost();
//     let totalCarPrice = rentalCarCost();
//     let result = "The car cost: $" + totalCarPrice +", the hotel cost: $" + totalHotelPrice + ", the plane tickets cost: $" + totalPlanePrice;
//     return result
// }


// console.log(totalVacationCost())