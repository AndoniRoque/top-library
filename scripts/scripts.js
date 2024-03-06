const dune = new Book(0, "Dune", "Frank Herbert", 500, "Yes");
const rayuela = new Book(1, "Rayuela", "Julio Cortazar", 600,"Yes");

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#closeBook");
const uploadBook = document.querySelector("#uploadBook");
const form = document.querySelector("form");
const outputBox = document.querySelector("output");
const showLibrary = document.querySelector("#showLibrary");
const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
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
    const id = createId();
    const book = new Book(id, title, author, pages, read ? "yes" : "no");
    addBookToLibrary(book);
    
    dialog.close(book.info());
})

console.log(myLibrary);

closeButton.addEventListener("click", () =>{
    dialog.close();
})

showLibrary.addEventListener('click', () => {
    displayLibrary(myLibrary);
})

function createId() {
    return myLibrary.length == 0 ? 0 : myLibrary.length + 1; 
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary() {
    const bookContainer = document.createElement('div');
    bookContainer.className = "bookContainer";
    outputBox.textContent = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        const titleCard = document.createElement('h3');
        const authorCard = document.createElement('h6');
        const readCard = document.createElement('div');
        const bookNro = document.createElement('div');
        const deleteBook = document.createElement('button');

        bookCard.className = "bookCard";
        bookNro.className = "bookIndex";

        deleteBook.textContent = "X";
        bookNro.textContent = book.id;
        titleCard.textContent = book.title;
        authorCard.textContent = book.author;
        readCard.textContent = book.read;


        deleteBook.addEventListener('click', () => {
            console.log(book.id);
            myLibrary.splice(book.id, 1);
        })
        
        
        bookCard.appendChild(bookNro);
        bookCard.appendChild(titleCard);
        bookCard.appendChild(authorCard);
        bookCard.appendChild(readCard);
        bookCard.appendChild(deleteBook);
        
        bookContainer.appendChild(bookCard);
        
        outputBox.appendChild(bookContainer);
    });
}

addBookToLibrary(dune);
addBookToLibrary(rayuela);
