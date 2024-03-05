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

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = () => {
//         return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
//     }
// }

// const book = new Book("House of Leaves", "Mark z. Danielewski", "500", "read");
// console.log(book.info());

// console.log(player.valueOf());

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
    this.name = name; 
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
}

console.log(Object.getPrototypeOf(Player.prototype));

console.log(Object.setPrototypeOf(Player.prototype, Person.prototype));
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'x');
const player2 = new Player('Alex', 'o');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'