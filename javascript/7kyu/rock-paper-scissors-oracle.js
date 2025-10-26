/*You are the rock paper scissors oracle.

Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.

Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:

"rock/scissors"

If it's not possible for you to win then return:

"tie"*/

// my solution

function oracle(gestures) {
  // results = [rock, paper, scissors]
  let results = [0, 0, 0];
  let answer = [];

  //score logic
  for (let i = 0; i < gestures.length; i++) {
    if (gestures[i] === 'paper') {
      // paper beats rock (+1 to paper, -1 to rock)
      results[2] += 1; // scissors wins
      results[0] -= 1; // rock loses
    } else if (gestures[i] === 'rock') {
      // rock beats scissors
      results[1] += 1;
      results[2] -= 1;
    } else if (gestures[i] === 'scissors') {
      // scissors beats paper
      results[0] += 1;
      results[1] -= 1;
    }
  }

  // determine which gestures have a positive score (can win)
  if (results[0] > 0){
    answer.push('rock');
  } 
  if (results[1] > 0){
    answer.push('paper');
    }
  if (results[2] > 0){
    answer.push('scissors');
}
  // if no winning gestures
  if (answer.length === 0) return 'tie';

  return answer.join('/');
}