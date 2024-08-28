const form = document.querySelector('form');
console.log(form);


const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log('First name input:', fnameInput);
console.log('Last name input:', lnameInput);

const firstnameInput = document.querySelector('input[name="firstname"]');
const lastnameInput = document.querySelector('input[name="lastname"]');
console.log('First name input by name:', firstnameInput);
console.log('Last name input by name:', lastnameInput);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fnameValue = fnameInput.value;
    const lnameValue = lnameInput.value;

    if (fnameValue === '' || lnameValue === '') {
        alert('Please fill in both fields.');
        return;
    }
    const usersAnswerList = document.querySelector('.usersAnswer');


    const fnameLi = document.createElement('li');
    fnameLi.textContent = fnameValue;
    usersAnswerList.appendChild(fnameLi);

    const lnameLi = document.createElement('li');
    lnameLi.textContent = lnameValue;
    usersAnswerList.appendChild(lnameLi);

    fnameInput.value = '';
    lnameInput.value = '';
});