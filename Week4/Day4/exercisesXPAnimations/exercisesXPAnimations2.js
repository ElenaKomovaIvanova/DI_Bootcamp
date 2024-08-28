let containerElement = document.getElementById('container');
let animateElement = document.getElementById('animate');

let containerWidth = containerElement.clientWidth;
let animateWidth = animateElement.clientWidth;
let start = 0;
function myMove() {
    let intervalId = setInterval(function () {
        if ((containerWidth - animateWidth - start) > 0) {
            start++;
            animateElement.style.left = start + 'px';
        } else {
            clearInterval(intervalId);
        }
    },1);
}