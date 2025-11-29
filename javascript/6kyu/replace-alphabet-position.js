/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"*/


// my solution

/*
 replace every letter in the string with its alphabetical position.
 non-letters are ignored.
 a/A = 1, b/B = 2, ..., z/Z = 26
 */

function alphabetPosition(text) {
  // convert the string to lowercase for easy comparison
  return text
    .toLowerCase()
    // split into characters to process individually
    .split('')
    // map each character to its alphabet position if it's a letter
    .map(char => {
      // get char code (ASCII/Unicode) 
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      const code = char.charCodeAt(0);
      
      // ASCII codes for 'a' to 'z' are 97 to 122
      if (code >= 97 && code <= 122) {
        return code - 96; // convert to 1–26
      }
      
      // for non-letters return nothing
      return null;
    })
    // filter out null values (non-letters)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    .filter(num => num !== null)
    // join numbers with spaces
    .join(' ');
}

// example:
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// output:
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11