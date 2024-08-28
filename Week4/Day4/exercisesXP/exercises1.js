let h1Element = document.getElementsByTagName('h1')[0];
console.log(h1Element);

h1Element.addEventListener('mouseover', function() {
    let randomfontSize = (Math.floor(Math.random() * 9) * 100) + 'px';
    h1Element.style.fontSize  = randomfontSize;
});


const article = document.querySelector('article');
const paragraphs = article.getElementsByTagName('p');
if (paragraphs.length > 0) {
    const lastParagraph = paragraphs[paragraphs.length - 1];
    article.removeChild(lastParagraph);
}

const h2Element = document.getElementsByTagName('h2')[0];
h2Element.addEventListener("click", function () {
    h2Element.style.backgroundColor = "red"
});

const h3Element = document.getElementsByTagName('h3')[0];
h3Element.addEventListener("click", function () {
    h3Element.style.display = "none"
});

let articleEl = document.getElementsByTagName('article');
let buttonEl = document.createElement('Button');
article.appendChild(buttonEl)
buttonEl.textContent = 'Button';
buttonEl.addEventListener('click', clickButton)

function clickButton() {
    let pElement = document.getElementsByTagName('p');
    Array.from(pElement).forEach(element => {
        element.style.fontWeight = 'bold'
    });
}

