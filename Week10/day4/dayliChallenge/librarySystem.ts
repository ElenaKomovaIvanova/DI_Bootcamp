interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    public addBook(newBook: Book): void {
        this.books.push(newBook);
    }

    public getBookDetails(isbn: string): string | undefined {
        let book;

        for (const b of this.books) {
            if (b.isbn === isbn) {
                book = b;
                break;
            }
        }

        if (book) {
            return `Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre ?? "N/A"}`;
        }
        return undefined;
    }

    getBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        const books = this.getBooks();
        return books.map(book => book.title);
    }
}


const myLibrary = new DigitalLibrary("https://mylibrary.com");

myLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "1",
    publishedYear: 1925,
    genre: "Fiction"
});

myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "2",
    publishedYear: 1949
});


console.log(myLibrary.getBookDetails("1"));

console.log(myLibrary.getBookDetails("2"));

console.log(myLibrary.listBooks());

console.log(myLibrary.website);
