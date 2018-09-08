# Memory Matching Game

## Project Summary

This is the second project as part of my Front-End Web Development Nanodegree. It is a memory matching game. To practice HTML, CSS, and JavaScript I didn't use any frameworks. In order to win the game, a player has to match 8 pairs of cards. The game can be played [here](https://abdusabri.github.io/fend-memory-game-project/)

### Game Play Notes

- The game has 16 cards in total (8 matching pairs)

- Once a card is flipped, the game is considered started, and a timer starts to calculate the time until the game is won

- There is a moves counter, where each 2 flipped cards are counted as 1 move (regardless if the 2 flipped cards are matching or not)

- The less number of moves used to win the game, the higher the star rating

- The game starts with a default rating of 3 stars, and as more moves are made, the star rating is reduced

- In order to maintain a 3 star rating, the game must be won with no more than 12 moves

- A 2 star rating is achieved if the game is won with more than 12 moves and no more than 16 moves

- A 1 star rating is achieved if the game is won with more than 16 moves

- The game can be reset/restarted at any time

- After winning the game, a modal is displayed, where there is an option to play another round

## Technical Implementation Notes

Following are some notes and things that could be improved:

- The cards has a fixed HTML structure, and when resetting/shuffling the cards, the styles are changed to represent the new order of cards. I've tested the performance of the approach, and found it much faster than removing and recreating HTML elements

- The function used to shuffle/randomize the cards could be improved. Sometimes the cards need to be better-distributed across the game's board

- The rating system could be improved by incorporating a time-based factor (in combination with the number of moves)

## References and Credits

Following are some articles, links, and tools that were very helpful for me while completing the project work:

- Animations - [Animista](http://animista.net)

- Modal - [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)

- Button styles - [W3Schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover)

- Time claculation - [here](https://jsfiddle.net/Daniel_Hug/pvk6p/) and [here](https://gist.github.com/ddallala/325209)
