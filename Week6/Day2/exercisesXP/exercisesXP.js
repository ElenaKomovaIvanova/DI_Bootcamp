const paramsObject = {
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    q: 'hilarious',
    rating: 'g',
    limit: 25,
};

const params = new URLSearchParams(paramsObject);

const baseUrl = 'https://api.giphy.com/v1/gifs/search';

fetch(`${baseUrl}?${params.toString()}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Wrong response");
        }
    })
    .then((data) => {
        if (Array.isArray(data)) {
            console.log(data);
        } else {
            let arrayData = Object.values(data);
            console.log(arrayData);
        }
    })
    .catch(function (error) {
        console.log(`We got the error: ${error}`);
    });


const paramsObject2 = {
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    q: 'sun',
    offset: 2,
    limit: 5,
};

const params2 = new URLSearchParams(paramsObject);

fetch(`${baseUrl}?${params2.toString()}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Wrong response");
        }
    })
    .then((data) => {
        if (Array.isArray(data)) {
            console.log(data);
        } else {
            let arrayData = Object.values(data);
            console.log(arrayData);
        }
    })
    .catch(function (error) {
        console.log(`We got the error: ${error}`);
    });


async function getResponse() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}
getResponse();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// 'calling' is logged immediately,
// after a 2-second 'resolved' is logged.
