let idNav = document.getElementById("navBar");
idNav.setAttribute("id", "socialNetworkNavigation");

const ulElement = document.querySelector('#socialNetworkNavigation ul');
let newLi = document.createElement('li');
newLi.textContent = 'Logout';
ulElement.appendChild(newLi);


const firstListItem = ulElement.firstElementChild;
const lastListItem = ulElement.lastElementChild;
console.log('First <li> text:', firstListItem.textContent);
console.log('Last <li> text:', lastListItem.textContent);