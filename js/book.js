/**
 * Represents a book class
 * 
 * @class
 */
class Book {
    /**
     * 
     * @param {string} title - The name of the book
     * @param {string} author - The name of the author of the book
     * @param {number} pages - The number of pages
     * @param {number} publishedYear - The year in which the book was published
     */


    constructor(title, author, pages, publishedYear) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publishedYear = publishedYear;
    }
}

export { Book };