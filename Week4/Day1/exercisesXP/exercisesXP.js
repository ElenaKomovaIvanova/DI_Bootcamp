const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);

index = people.indexOf("James");
people[index] = "Jason";
console.log(people);

people.push("Elena");
console.log(people);

index = people.indexOf("Mary");
console.log(index);

indexMary = people.indexOf("Mary");
peopleCopy1 = people.slice(0, indexMary);
peopleCopy2 = people.slice(indexMary + 1,people.length);
peopleCopy = peopleCopy1.concat(peopleCopy2);
console.log(peopleCopy);

index = people.indexOf("Foo");
console.log(index);
// is not found in the array, so it returns -1

last = people[people.length-1]
console.log(last);
//  index of the last element is length - 1

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}


for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
        break;
    }
    console.log(people[i])
}

colors = ["red", "green", "blue", "white", "black"];
for (let i = 0; i < colors.length; i++) {
    console.log('My #1 choice is ' + colors[i])
} 

let number = prompt("Please enter a number:");
number = Number(number);
while (number < 10) {
    number = prompt("Please enter a number:");
    number = Number(number);
}


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
let second_tenant = building.nameOfTenants[1];
console.log(second_tenant, building.numberOfRoomsAndRent[second_tenant.toLowerCase()]);

let sara_rent = building.numberOfRoomsAndRent["sarah"][1];
let dan_rent = building.numberOfRoomsAndRent["dan"][1];
let david_rent = building.numberOfRoomsAndRent["david"][1];
if (sara_rent > dan_rent && david_rent > dan_rent) {
    building.numberOfRoomsAndRent["dan"][1] = 1200;
}
console.log(building.numberOfRoomsAndRent);

const family = {
    husbant: "Vova",
    wife : "Lena",
    cat: "sausage"
};

console.log("Keys:");
for (let key in family) {
    console.log(key);
}

console.log("Values:");
for (let key in family) {
    console.log(family[key]); // Logs the value associated with each key
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

let array = []
for (let key in details) {
     array.push(key),
     array.push(details[key]);
    //  my name is Rudolf the reindeer
}
console.log(array.join(" "));

nameSociety = []
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
for (let i = 0; i < names.length; i++) {
    nameSociety.push(names[i][0]);
}
nameSociety.sort()
console.log(nameSociety.join(""))  
ABJKPS

