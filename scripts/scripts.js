const myLibrary = [];

addBookToLibrary(createBook(params));
displayBooks();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function createBook(params) {
    // recieve book information through form
    const book = new Book(params)
    return book;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        // display book title in #container
    });
}

