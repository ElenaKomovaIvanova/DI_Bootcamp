// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// function displayStudentInfo({ first, last }) {
//     return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// const users =
// {
//     user1: 18273,
//     user2: 92833,
//     user3: 90315
// }

// let usersArr = Object.entries(users);
// console.log(usersArr);
// let userArr2 = usersArr.map(([user, key]) => ([user, key * 2]));

// console.log(userArr2);


// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const member = new Person('John');

//   console.log(typeof member); //object

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };

// 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };


// Evaluate these (ie True or False)

// [2] === [2] false
// {} === {} false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;

// console.log(object2.number) 4 Store a reference to one object (object1)
// console.log(object3.number) 4 Store a reference to one object (object1)
// console.log(object4.number) 5 New object created

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(sound) {
        return `The ${this.type} named ${this.name} is ${this.color} and says ${sound}`;
    }
}

let okapi = new Mammal('Rex', 'dog', 'brown');
console.log(okapi.sound('woof'));

class farmerCow extends Mammal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(sound) {
        return `Moooo I'm a cow, named ${this.name} and I'm ${this.color} and ${sound}`;
    }
}

let cow = new farmerCow('Zorka', 'cow', 'brown and white');
console.log(cow.sound('moo'));