
let hand = [];
let suit = ["C", "D", "H", "S"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        
let deck = new Array();
        
for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        let card = {Value: value[i], Suit: suit[j]};
        deck.push(card);
    }
}


function deal(deck) {
    //deck = getDeck();

    while(deck.length != 0) {
        if (deck.length > 5)
            for (let i = 0; i < 5; i++) {
                hand[i] = deck.splice(Math.floor(Math.random() * deck.length), 1);
            }
    
        else if(deck.length < 6) {
            for (let i = 0; i < deck.length; i++) {
                hand[i] = deck.splice(Math.floor(Math.random() * deck.length), 1);
            }
        }
    
        return hand;
    }
}


https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript