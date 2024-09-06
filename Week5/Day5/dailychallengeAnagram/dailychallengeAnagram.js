function isAnagram(firstStr, secondStr) {
    let firstStrReddy = firstStr.toLowerCase().replace(/ /g, '').split('');
    let secondStrReddy = secondStr.toLowerCase().replace(/ /g, '').split('');

    function countCharacters(arr) {
        return arr.reduce((accumulator, currentValue) => {
            if (accumulator[currentValue]) {
                accumulator[currentValue] += 1;
            } else {
                accumulator[currentValue] = 1;
            }
            return accumulator;
        }, {});
    }
    const firstStrReducer = countCharacters(firstStrReddy);
    const secondStrReducer = countCharacters(secondStrReddy);

    console.log(firstStrReducer, secondStrReducer);

    function result() {
        const keys1 = Object.keys(firstStrReducer);
        const keys2 = Object.keys(secondStrReducer);
        
        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if ((key in secondStrReducer) && firstStrReducer[key] === secondStrReducer[key]) {
                return true;
            } else {
                return false;
            }
        }

    }
    return result();
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("Astroner", "Morer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots !"));
