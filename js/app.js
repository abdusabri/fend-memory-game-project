// The cards list has the class names of the icon fonts representing the cards
const cardsList = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt',
    'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle',
    'fa-diamond', 'fa-bomb', 'fa-leaf', 'fa-bomb',
    'fa-bolt', 'fa-bicycle', 'fa-paper-plane-o', 'fa-cube'
];
// To be initialized after the DOM content is loaded
var deck, reset = null;

// Init the app; shuffle cards (reset) and add event listeners
document.addEventListener('DOMContentLoaded', function () {
    // main variables assignment and event listeners
    deck = document.getElementById('deck');
    reset = document.getElementById('reset');

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
        // The HTML element (li), which holds the card icon font as a child element
        let cardElement = deck.children[i];
        let card = cardElement.firstElementChild;
        // Replace the class name to match the shuffled one from the list
        // The icon font class is the 2nd on the element's class list
        card.classList.replace(card.classList[1], cardsList[i]);
    }
}

function resetGame() {
    shuffle(cardsList);
    setCards();
}