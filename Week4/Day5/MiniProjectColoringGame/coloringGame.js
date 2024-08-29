// user selected color, global variable
let selectedColor = ''; 
let isMouseDown = false;
let button = document.getElementById('buttonClear')
document.addEventListener('mousedown', function () {
    isMouseDown = true;
});

document.addEventListener('mouseup', function () {
    isMouseDown = false;
});


// function draws the floor
function drawField() {
    const field = document.getElementById('field');
    let getColors = document.getElementsByClassName('color');

    Array.from(getColors).forEach(element => {
        let colorId = element.id;
        element.style.backgroundColor = colorId;
    });

    for (let i = 0; i < 60 * 40; i++) {
        const square = document.createElement('div');
        square.classList.add('field-square');
        field.appendChild(square);
    }
}
drawField();

function getUserColor() {
    let colorPalette = document.querySelectorAll('.color');
    colorPalette.forEach(element => {
        element.addEventListener('click', function () {
            selectedColor = element.id; // Обновляем глобальную переменную
            console.log(selectedColor); // Выводим выбранный цвет в консоль
        });
    });
}
getUserColor();

let fieldSquares = document.querySelectorAll('.field-square');

fieldSquares.forEach(element => {
    element.addEventListener('mouseover', function () {
        if (isMouseDown) {
            element.style.backgroundColor = selectedColor; 
        }
    });
});

button.addEventListener('click', function () {
    fieldSquares.forEach(element => {
        element.style.backgroundColor = 'WhiteSmoke';
    })
});