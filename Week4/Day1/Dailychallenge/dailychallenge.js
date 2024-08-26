let sentence = "This dinner is not that bad ! You cook well"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")
replace = "good"
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    let end = wordBad + "bad".length;
    let toRemove = sentence.slice(wordNot,end);
    let newSentence = sentence.replace(toRemove, replace);
    console.log(newSentence)
} else {
    console.log(sentence)
}

const letter = '*';
// for (let i = 1; i < 7; i++) {
//     let result = letter.repeat(i)
//     console.log(result)
// }

let result = '';
for(let y = 1; y < 7 ; y++) {
    for (let x = 1; x <= y; x++){
        result += letter;
    }       
    result += '\n';
}
console.log(result);

