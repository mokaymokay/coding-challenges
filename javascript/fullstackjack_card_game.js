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
// --> returns "Tie!"
*/

function fullstackJack(player1Hand, player2Hand) {
  var cardRank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],
      player1Score = 0,
      player2Score = 0,
      i = 0;

  while (i < player1Hand.length ) {
    if (cardRank.indexOf(player1Hand[i]) > cardRank.indexOf(player2Hand[i])) {
      player1Score += 1;
    } else if (cardRank.indexOf(player1Hand[i]) < cardRank.indexOf(player2Hand[i])) {
      player2Score += 1;
    }
    i++;
  }

  if (player1Score > player2Score) {
    return "Player 1 wins " + player1Score + " to " + player2Score + "!";
  } else if (player1Score < player2Score) {
    return "Player 2 wins " + player2Score + " to " + player1Score + "!";
  } else {
    return "Tie!";
  }
}

// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']);
// fullstackJack(['K', '5', '2', 'T'], ['A', 'J', 'Q', '8']);
