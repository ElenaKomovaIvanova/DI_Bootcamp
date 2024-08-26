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

const letter1 = '*'
for (let i = 1; i < 7; i++) {
    let result = letter1.repeat(i)
    console.log(result)
}

const letter = '*'
let result = letter
for(let y = 2; y < 8 ; y++) {
    for (let x = 1; x < 2; x = 2){
        console.log(result)}       
result = letter.repeat(y)
}
