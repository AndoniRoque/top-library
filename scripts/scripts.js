const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#closeBook");
const uploadBook = document.querySelector("#uploadBook");
const form = document.querySelector("form");
const outputBox = document.querySelector("output");

uploadBook.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close(form.value);
})

newBookButton.addEventListener("click", () =>{
    dialog.showModal();
})

closeButton.addEventListener("click", () =>{
    dialog.close();
})

dialog.addEventListener("close", (e) => {
    outputBox.value = dialog.returnValue = `Author:${dialog.returnValue} `;
})


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function createaNewBook(params) {
    const book = new Book(params);
    return book;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        outputBox.textContent += book.info() + " | ";
    });
}

const dune = new Book("Dune", "Frank Herber", 500, "Yes");
const rayuela = new Book("Rayuela", "Julio Cortazar", 600,"Yes");

addBookToLibrary(dune);
addBookToLibrary(rayuela);
displayLibrary();