/*Background
A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:

6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
Task
You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

Notes
There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed beside each bar except where the count is 0
The number of rolls may vary but there are never more than 100*/

// my solution

function histogram(diceCounts) {
  // start with an empty string to build the result
  let result = "";

  // loop from face 6 down to 1
  for (let face = 6; face >= 1; face--) {
    // get how many times this face was rolled
    let count = diceCounts[face - 1];

    // start the line with the face number and a "|"
    let line = face + "|";

    // if the count is more than 0, add "#" and the number
    if (count > 0) {
      line += "#".repeat(count) + " " + count;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    }

    // add a newline at the end of the line
    line += "\n";

    // add this line to the final result
    result += line;
  }

  // return the complete histogram string
  return result;
}

// example:
let dice = [7, 3, 10, 1, 0, 5];
console.log(histogram(dice));