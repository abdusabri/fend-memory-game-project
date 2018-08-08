// The cards list has the class names of the icon fonts representing the cards
const cardsList = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt',
    'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle',
    'fa-diamond', 'fa-bomb', 'fa-leaf', 'fa-bomb',
    'fa-bolt', 'fa-bicycle', 'fa-paper-plane-o', 'fa-cube'
];
// To be set after the DOM content is loaded
var deck, reset, movesElement;

// To be set and managed as the game progresses
var flippedCard = null, flippedElement = null;
var waitForMismatchedCase = false;
var numberOfMatchedPairs = 0, numberOfMoves = 0;

// Init the app; shuffle cards (reset) and add event listeners
document.addEventListener('DOMContentLoaded', function () {
    // main variables assignment and event listeners
    deck = document.getElementById('deck');
    reset = document.getElementById('reset');
    movesElement = document.getElementById('numMoves');

    deck.addEventListener('click', deckClicked);
    reset.addEventListener('click', resetGame);

    // game initialization
    shuffle(cardsList);
    setCards();
});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}

// Sets the cards according to the cardsList, used during initial 
// Page loading and when the reset game faunction
function setCards() {
    // Update the styles of the cards to match the shuffled list
    for (let i = 0; i < cardsList.length; i++) {
        // Unflipp the card, won't have an effect if the card is already flipped
        deck.children[i].classList.remove('deck__card--flipped');
        deck.children[i].classList.remove('deck__card--matched');
        // The HTML element (li), which holds the card icon font as a child element
        let card = deck.children[i].firstElementChild;
        // Replace the class name to match the shuffled one from the list
        // The icon font class is the 2nd on the element's class list
        card.classList.replace(card.classList[1], cardsList[i]);
    }
}

function resetGame() {
    if (waitForMismatchedCase) {
        setTimeout(resetGame, 250);
        return;
    }
    flippedCard = null;
    flippedElement = null;
    waitForMismatchedCase = false;
    numberOfMoves = 0;
    movesElement.innerText = numberOfMoves;
    shuffle(cardsList);
    setCards();
}

function deckClicked(event) {
    // Mismatched cards are kept flipped for a little more than 1 second before
    // they are unflipped. So the waitForMismatchedCase is a flag used to prevent 
    // Further flipping and interaction if a user clicks way too fast
    if (waitForMismatchedCase) {
        return;
    }
    // Avoid responding to click events between or around cards
    if (event.target.classList.contains('deck__card') &&
        !event.target.classList.contains('deck__card--flipped')) {
        //Flip the card
        event.target.classList.add('deck__card--flipped');

        // The HTML element (li) holds the card icon font as a child element
        // The icon font class is the 2nd on the element's class list
        let clickedCard = event.target.firstElementChild.classList[1];
        
        // Check if a card is already flipped
        if (flippedCard != null) {
            // Regardless of matching status, every 2 flipped cards are counted as a move
            numberOfMoves++;
            movesElement.innerText = numberOfMoves;

            let isMatching = (flippedCard == clickedCard)? true : false;
            if (isMatching) {
                processMatchedCase(event);
            } else {
                processMismatchedCase(event);
            }
        } else {
            flippedCard = clickedCard;
            flippedElement = event.target;
        }
    }
}

function processMatchedCase(event) {
    event.target.classList.add('deck__card--matched');
    flippedElement.classList.add('deck__card--matched');
    flippedCard = null;
    flippedElement = null;
    numberOfMatchedPairs++;
    if (numberOfMatchedPairs == 8) {
        endGame();
    }
}

function processMismatchedCase(event) {
    waitForMismatchedCase = true;
    event.target.classList.add('deck__card--not-matched');
    flippedElement.classList.add('deck__card--not-matched');
    setTimeout(() => {
        event.target.classList.remove('deck__card--not-matched');
        flippedElement.classList.remove('deck__card--not-matched');
        event.target.classList.remove('deck__card--flipped');
        flippedElement.classList.remove('deck__card--flipped');
        flippedCard = null;
        flippedElement = null;
        waitForMismatchedCase = false;
    }, 1250);
}

function endGame() {
    console.log('Congrats');
}
