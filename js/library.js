/**
 * Represents a library that holds books
 * 
 * @class
 */
class Library {
    /**
     * Creates a new Library instance
     */
    constructor() {
        this.books = [];
    }

    /**
     * Adds a book to the library.
     *
     * @param {Book} book - The book object to add to the library.
     */
    addBook(book) {
        this.books.push(book);
    }

    /**
     * Removes a book to the library.
     *
     * @param {Book} book - The book object to add to the library.
     */
    removeBook(book) {
        this.books.pop(book);
    }

    /**
     * Returns array with books objects.
     *
     * 
     */
    listBooks() {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            console.log(`Title - ${book.title} | Author - ${book.author} | Pages - ${book.pages} | Published Year - ${book.publishedYear}`);
        }
    }
}

export { Library };