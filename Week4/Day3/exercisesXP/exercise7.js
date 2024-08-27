let book1 = {
    title: "The Roadside Picnic",
    author: "Arkady and Boris Strugatsky",
    image: "https://m.media-amazon.com/images/I/61Kj-qUmbgL._SL1000_.jpg",
    alreadyRead: true
};

let book2 = {
    title: "Hard to Be a God",
    author: "Arkady and Boris Strugatsky",
    image: "https://m.media-amazon.com/images/I/81abxbDHPXL._SL1500_.jpg",
    alreadyRead: false
};

let allBooks = [book1, book2];

function renderBooks() {
    let bookSection = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');

        bookDiv.innerHTML = 
            '<h2>' + book.title + '</h2>' +
            '<p>Written by ' + book.author + '</p>' +
            '<img src="' + book.image + '" alt="' + book.title + '" style="width: 100px;">';

        if (book.alreadyRead == true) {
            bookDiv.style.color = 'red';
        }

        bookSection.appendChild(bookDiv);
    });
}

renderBooks();