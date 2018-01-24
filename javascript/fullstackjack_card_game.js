/*
JavaScript JumpStart Online: FullstackJack Card Game

Write a function called fullstackJack and figure out the winner of the game.

FullstackJack Rules:
- Each player is dealt the same number of cards.
- They flip the card at the top of the deck.
- The card with the highest value wins the round, ​and the winning player receives
a point.
- The two cards used are discarded.
- The players continue playing until there are no remaining cards.
- The player with the most points at the end wins.

Representing Cards: A players hand is stored in an array. Each index is a card
value.

The card rank is as follows (from lowest to highest): '2','3','4','5','6','7','8',
                                                      '9','T','J','Q','K','A'.

Player hands are passed to the fullstackJack function as arguments, as in the
examples below:

**Examples**

// player1Hand = ['A', '7', '8'];
// player2Hand = ['K', '5', '9'];
fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// --> returns "Player 1 wins 2 to 1!"

fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// --> returns "Player 1 and 2 Tie!"
*/
