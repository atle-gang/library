import { Library } from './library.js';
import { Book } from './book.js';

// Create a new library instance
const myLibrary = new Library();

// Get book details from the user
const title = prompt("Name: ");
const author = prompt("Author: ");
const pages = prompt("Pages: ");
const publishedYear = prompt("Year: ");

// Create a new book instance
const newBook = new Book(title, author, parseInt(pages), parseInt(publishedYear));

// Add the book to the library
myLibrary.addBook(newBook);

// List all books in the library
console.log(myLibrary.listBooks());
