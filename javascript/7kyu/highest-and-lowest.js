/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

// my solution

function highAndLow(numbers) {
  // split the input string into an array of substrings
  // each substring represents a number
  const numArray = numbers.split(" ");

  // convert each substring to a number
  const intArray = numArray.map(Number);

  // find the maximum and minimum values in the array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const max = Math.max(...intArray);
  const min = Math.min(...intArray);

  // return the result in the required "max min" format
  return `${max} ${min}`;
}

// examples
console.log(highAndLow("1 2 3 4 5"));    // "5 1"
console.log(highAndLow("1 2 -3 4 5"));   // "5 -3"
console.log(highAndLow("1 9 3 4 -5"));   // "9 -5"