const containerDiv = document.getElementById('container').innerHTML;
console.log(containerDiv);

// 2. Change the name “Pete” to “Richard”
const lists = document.querySelectorAll('ul.list');
lists.forEach(list => {
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent === 'Pete') {
            item.textContent = 'Richard';
        }
    });
});

// 3. Delete the second <li> of the second <ul>
const second = document.querySelectorAll('.list')[1];
second.removeChild(second.children[1]);

// 4. Change the name of the first <li> of each <ul> to your name
const all = document.querySelectorAll('.list');
all.forEach((ul) => {
    ul.firstElementChild.textContent = 'Elena'; // Замените 'YourName' на ваше имя
});

// 5. Add a class called student_list to both of the <ul>'s
all.forEach((ul) => {
    ul.classList.add('student_list');
});

// 6. Add the classes university and attendance to the first <ul>
const firstUl = document.querySelector('.list');
firstUl.classList.add('university', 'attendance');

// 7. Add a “light blue” background color and some padding to the <div>
const containerDiv1 = document.getElementById('container')
containerDiv1.style.backgroundColor = 'lightblue';
containerDiv1.style.padding = '10px';

// 8. Do not display the <li> that contains the text node “Dan”
const lastLi = second.querySelector('li:last-child');
if (lastLi.textContent === 'Dan') {
    lastLi.style.display = 'none';
}

// 9. Add a border to the <li> that contains the text node “Richard”
const items1 = document.querySelectorAll('li')
items1.forEach((item) => {
    if (item.textContent === 'Richard') {
        item.style.border = '2px solid black';
    }
});

// 10. Change the font size of the whole body
document.body.style.fontSize = '25px';

