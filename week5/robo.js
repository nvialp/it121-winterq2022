let deck = [];
let hand = [];
let suit = ["C", "D", "H", "S"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        let card = {Value: value[i], Suit: suit[j]};
        deck.push(card);
    }
}


function deal(deck) {
    for (let i = 0; i < 5; i++) {
        hand[i] = deck.splice(Math.floor(Math.random() * deck.length), 1);
    }

    return hand;
}


hand = deal(deck);


https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript