import { Library } from './library.js';
import { Book } from './book.js';


const myLibrary = new Library();


const title = prompt("Name: ");
const author = prompt("Author: ");
const pages = prompt("Pages: ");
const publishedYear = prompt("Year: ");


const newBook = new Book(title, author, parseInt(pages), parseInt(publishedYear));


myLibrary.addBook(newBook);


myLibrary.listBooks();
