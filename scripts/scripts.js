const dune = new Book("Dune", "Frank Herber", 500, "Yes");
const rayuela = new Book("Rayuela", "Julio Cortazar", 600,"Yes");

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#closeBook");
const uploadBook = document.querySelector("#uploadBook");
const form = document.querySelector("form");
const outputBox = document.querySelector("output");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return this.title + " by " + this.author + ", " + this.pages + " pages, read:" + this.read
    }
}

newBookButton.addEventListener("click", () =>{
    dialog.showModal();
})

uploadBook.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const book = new Book(title,author, pages, read ? "yes" : "no");
    addBookToLibrary(book);
    console.log(myLibrary);
    dialog.close(book.info());
})

dialog.addEventListener("close", (e) => {
    outputBox.value = dialog.returnValue = `${dialog.returnValue} `;
})

closeButton.addEventListener("click", () =>{
    dialog.close();
})

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        outputBox.textContent += book.info() + " | ";
    });
}



addBookToLibrary(dune);
addBookToLibrary(rayuela);
