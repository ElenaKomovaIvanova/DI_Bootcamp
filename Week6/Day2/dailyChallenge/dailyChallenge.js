const baseUrl = 'https://api.giphy.com/v1/gifs/random';

function renderGif(gif) {
    const divElement = document.createElement('div');
    const gifElement = document.createElement('img');
    gifElement.src = gif;
    gifElement.classList.add('gif');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Delete';
    buttonElement.className = 'deleteGif';
    divElement.appendChild(gifElement);
    divElement.appendChild(buttonElement);
    buttonElement.addEventListener('click', handleButtonClick);
    document.querySelector('body').appendChild(divElement);
}


function handleButtonClick(event) {
    console.log('Button clicked');
    event.target.parentElement.remove();
}

async function getRandomGif(event) {
    event.preventDefault();
    let tag = event.target.elements.tag.value;
    const paramsObject = {
        api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
        tag: tag
    };

    const params = new URLSearchParams(paramsObject);

    try {
        const response = await fetch(`${baseUrl}?${params.toString()}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const objectGif = await response.json();
        console.log(objectGif);
        
        renderGif(objectGif.data.images.fixed_width.url);
    } catch (error) {
        console.error('error:', error);
    }
}
