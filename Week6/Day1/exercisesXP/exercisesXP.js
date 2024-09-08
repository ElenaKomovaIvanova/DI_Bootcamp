function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve('Number is less than or equal to 10');
        } else {
            reject('Number is greater than 10');
        }
    });
}


compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// Create a promise that resolves itself in 4 seconds and returns a “success” string.
    
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000);
});

myPromise.then(result => console.log(result));

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let myPromise1 = Promise.resolve(3);
let myPromise2 = Promise.reject('Boo!');

myPromise1
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.log('Error:', error));

myPromise2
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.log('Error:', error));
