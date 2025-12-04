/*Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

Example
input: "abcd", [0, 3, 1, 2]
output: "acdb"
Explanation
The character 'a' is placed at index 0.

The character 'b' is placed at index 3.

The character 'c' is placed at index 1.

The character 'd' is placed at index 2.

Notes
The string and the array will be of equal length.

The string will contain valid characters (A-Z, a-z, or 0-9);
the array will contain valid indices.*/

// my solution

function scramble(str, arr) {
  // create an array with the same length as the input string
  // this will hold characters in their new positions.
  let result = new Array(str.length);

  // loop over each character in the string
  for (let i = 0; i < str.length; i++) {
    // place each character at the position given by indices[i]
    result[arr[i]] = str[i];
  }

  // join the array back into a string and return it
  return result.join('');
}

// example
const inputString = "abcd";
const inputIndices = [0, 3, 1, 2];
console.log(scramble(inputString, inputIndices)); // output: "acdb"