const form = document.querySelector('form');
const nounInput = document.getElementById('noun');
const adjectiveInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');
const storyOutput = document.getElementById('story');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nounValue = nounInput.value;
    const adjectiveValue = adjectiveInput.value;
    const personValue = personInput.value;
    const verbValue = verbInput.value;
    const placeValue = placeInput.value;


    if (!nounValue || !adjectiveValue || !personValue || !verbValue || !placeValue) {
        alert('Please fill all fields.');
        return;
    }

    const text = `In the quiet ${placeValue}, ${personValue} stumbled upon a ${adjectiveValue} ${nounValue} hidden behind the bushes. 
    She ${verbValue} closer to inspect it, feeling a mix of curiosity and excitement. To her surprise, the ${nounValue} began to glow, 
    revealing a secret that would lead her on an unexpected adventure.`;
    
    storyOutput.textContent = text;

    form.reset();
});
