/*Rules of the "Rock, Paper, Scissors" game are:

Rock beats Scissors
Scissors beat Paper,
Paper beats Rock.
Let's play! You have to return which player won! In case of a draw return Draw!.

examples:
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/

//my solution
//function to determine the winner of a rock, paper, scissors game

function rps(p1, p2) {
  
  // step 1: check if both players chose the same item
  //if so, it's a draw
  if (p1 === p2) {
    return "Draw!";
  }

  //step 2: check all possible winning combinations for player 1
  // - rock beats scissors
  // - scissors beat paper
  // - paper beats rock
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    // if any of these conditions are true, player 1 wins
    return "Player 1 won!";
  } else {
    // otherwise, player 2 wins
    return "Player 2 won!";
  }
}