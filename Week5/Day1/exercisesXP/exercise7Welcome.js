const userPhoto = 'https://images.pexels.com/photos/18160231/pexels-photo-18160231.jpeg';

(function (userName) {
    const navbar = document.querySelector('ul');
    const userItem = document.createElement('li');
    userItem.classList.add('user');

    const userNameText = document.createTextNode(userName);

    const img = document.createElement('img');
    
    img.src = userPhoto;
    img.alt = 'User Photo';
    img.style.width = '60px';
    img.style.height = '60px';
    img.style.borderRadius = '50%'; 

    userItem.appendChild(userNameText);
    userItem.appendChild(img);

    navbar.appendChild(userItem);
})('Elena');
