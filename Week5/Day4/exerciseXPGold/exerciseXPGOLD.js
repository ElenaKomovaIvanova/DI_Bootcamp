const urlParams = new URLSearchParams(window.location.search);

let paramsObj = {};
urlParams.forEach((value, key) => {
    paramsObj[key] = value;
});

let jsonParams = JSON.stringify(paramsObj, null, 2);

document.getElementById("jsonParams").innerHTML = jsonParams;

console.log(jsonParams);

