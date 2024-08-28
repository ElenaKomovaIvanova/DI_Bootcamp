function sayHello() {
    alert('Hello World');
}

// part 2
setTimeout(sayHello, 2000);

function addParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    const container = document.getElementById('container');
    container.appendChild(paragraph);
}

setTimeout(addParagraph, 2000);


// part 3
let intervalId;

function addParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    const container = document.getElementById('container');
    container.appendChild(paragraph);
    
    if (container.children.length >= 5) {
        clearInterval(intervalId); 
    }
}

intervalId = setInterval(addParagraph, 2000);

function clearIntervalOnClick() {
    clearInterval(intervalId);
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearIntervalOnClick);
