function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.welcomeMessage = () => {
        console.log("hello ", this.name, " your maker is ", this.marker);
    }
}

const player = new Player("steve", "x");
console.log(player.name);
console.log(player.welcomeMessage())

const player2 = new Player("alex", "0");

console.log(player2.welcomeMessage());