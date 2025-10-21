/*I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++*/

//my solution

function generateShape(n) {
  // create an empty string to hold the final shape
  let result = '';

  // outer loop — runs 'n' times, once for each row
  for (let i = 0; i < n; i++) {

    // start with an empty string for the current row
    let row = '';

    // inner loop — runs 'n' times, once for each column
    for (let j = 0; j < n; j++) {
      // add one '+' to the current row
      row += '+';
    }

    // after building one full row, add it to the result
    result += row;

    // add a newline character after each row
    // (but not after the very last one to avoid an extra blank line)
    if (i < n - 1) result += '\n';
  }

  // return the completed square as a string
  return result;
}

// example:
console.log(generateShape(3));