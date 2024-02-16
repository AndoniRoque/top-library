// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.welcomeMessage = () => {
//         console.log("hello ", this.name, " your maker is ", this.marker);
//     }
// }

// const player = new Player("steve", "x");
// console.log(player.name);
// console.log(player.welcomeMessage())

// const player2 = new Player("alex", "0");

// console.log(player2.welcomeMessage());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

const book = new Book("House of Leaves", "Mark z. Danielewski", "500", "read");
console.log(book.info());