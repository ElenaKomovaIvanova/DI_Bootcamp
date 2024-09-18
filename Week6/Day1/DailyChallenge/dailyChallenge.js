// function makeAllCaps(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.every(element => typeof element === 'string')) {
//             resolve(arr.map(element => element.toUpperCase()));
//         } else {
//             reject('Not all elements in the array are strings')
//         }
//     });
// }

const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`

function toJs(morse) {
    try {
        const obj = JSON.parse(morse);
        return new Promise((resolve, reject) => {
            if (Object.keys(obj).length > 0) {
                resolve(obj);
            }
            else {
                reject('Error : object is empty');
            }
        });
    } catch (error) {
        reject(`${error.message}`)
    }
}

let input = '';

function toMorse(morse) {
    return new Promise((resolve, reject) => {
        input = prompt("Please enter a word or a sentence:");
        let userInput = input.toLowerCase();
        const result = [];
        for (const char of userInput) {
            if (morse[char]) {
                result.push(morse[char]);
            } else {
                reject('the character does not exist in the morse javascript object');
                return;
            }
        }
        console.log(result);
        resolve(result);
    });
}

function joinWords(morseTranslation) {
    const container = document.createElement('div');
    container.innerHTML = `'${input}' gives you :`
    morseTranslation.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        container.appendChild(div);
    });
    document.body.appendChild(container);
}

toJs(morse)
    .then(morseObj => toMorse(morseObj))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.error(error));