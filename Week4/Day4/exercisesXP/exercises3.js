let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
    return allBoldItems;
}

function highlight() {
    allBoldItems = getBoldItems();
    allBoldItems.forEach(element => {
        element.style.color = "blue";
    });
    return allBoldItems;
}

highlight();

function returnItemsToDefault() {
    allBoldItems = highlight();
    allBoldItems.forEach(element => {
        element.style.color = 'black';
    });
}

returnItemsToDefault();

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault); 
});