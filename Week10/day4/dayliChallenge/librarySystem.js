var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (newBook) {
        this.books.push(newBook);
    };
    Library.prototype.getBookDetails = function (isbn) {
        var _a;
        var book;
        for (var _i = 0, _b = this.books; _i < _b.length; _i++) {
            var b = _b[_i];
            if (b.isbn === isbn) {
                book = b;
                break;
            }
        }
        if (book) {
            return "Title: ".concat(book.title, ", Author: ").concat(book.author, ", Year: ").concat(book.publishedYear, ", Genre: ").concat((_a = book.genre) !== null && _a !== void 0 ? _a : "N/A");
        }
        return undefined;
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        var books = this.getBooks();
        return books.map(function (book) { return book.title; });
    };
    return DigitalLibrary;
}(Library));
var myLibrary = new DigitalLibrary("https://mylibrary.com");
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
