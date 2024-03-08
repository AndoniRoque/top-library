const dune = new Book(0, "Dune", "Frank Herbert", 500, true);
const rayuela = new Book(1, "Rayuela", "Julio Cortazar", 600, true);

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#closeBook");
const uploadBook = document.querySelector("#uploadBook");
const form = document.querySelector("form");
const outputBox = document.querySelector("output");
const showLibrary = document.querySelector("#showLibrary");
const info = document.querySelector(".info");
const infoModal = document.querySelector(".information");
const myLibrary = [];
let shown = false;

myLibrary.push(dune);
myLibrary.push(rayuela);

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
    dialog.style.display = "flex";
    dialog.showModal();
})

info.addEventListener('click', () => {
    infoModal.showModal();
})

uploadBook.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const id = createId();

    var found = false;

    myLibrary.forEach(book => {
        if(title == book.title && author == book.author) {
            found = true;
        }
    });

    if(found) {
        alert("Book already in library.");
    } else {
        const newBook = new Book(id, title, author, pages, read);
        addBookToLibrary(newBook);
    }

    dialog.close();
})

closeButton.addEventListener("click", () =>{
    dialog.style.display = "none";
    dialog.close();
})

showLibrary.addEventListener('click', () => {
    if(shown){
        showLibrary.textContent = "Show Library";
        outputBox.textContent = "";
        shown = false;
    } else {
        showLibrary.textContent = "Hide Library";
        shown = true;
        displayLibrary(myLibrary);
    }
})

function createId() {
    return myLibrary.length == 0 ? 0 : myLibrary.length + 1; 
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    dialog.style.display = "none";
       if(shown){
        showLibrary.textContent = "Show Library";
        outputBox.textContent = "";
        shown = false;
    } else {
        showLibrary.textContent = "Hide Library";
        shown = true;
        displayLibrary(myLibrary);
    }
}

function displayLibrary() {
    const bookContainer = document.createElement('div');
    bookContainer.className = "bookContainer";
    outputBox.textContent = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        const titleCard = document.createElement('h3');
        const authorCard = document.createElement('h6');
        const readCard = document.createElement('div');
        const bookNro = document.createElement('div');
        const deleteBook = document.createElement('button');
        const readCheckbox = document.createElement('input');
        const textRead = document.createElement('div');
        readCheckbox.type = 'checkbox';
        readCheckbox.id = "textRead" + index;

        readCheckbox.addEventListener('change', () => {
            readCheckbox.checked ? textRead.textContent = "read" : textRead.textContent = "not read";
        })

        readCheckbox.checked = book.read;
        book.read ? textRead.textContent = 'read' : textRead.textContent = 'not read';

        readCard.appendChild(readCheckbox);
        readCard.appendChild(textRead);


        bookCard.className = "bookCard";
        bookNro.className = "bookIndex";

        deleteBook.textContent = "Remeove Book";
        bookNro.textContent = index;
        titleCard.textContent = book.title;
        authorCard.textContent = book.author;

        deleteBook.addEventListener('click', () => {
            console.log(index);
            myLibrary.splice(index, 1);
            displayLibrary();
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

