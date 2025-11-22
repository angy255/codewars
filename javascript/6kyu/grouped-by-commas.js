/*Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n <= 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"*/

// my solution

/*formats a non-negative integer with commas every 3 digits
 param {number} n - integer between 0 and 2147483647
 returns {string} - decimal string with commas
 */

function groupByCommas(n) {
  // convert to string so we can work with individual digits
  const str = n.toString();

  let result = "";
  let count = 0;

  // loop backwards through digits
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result; 
    count++;

    // if 3 digits reached and not at the beginning, insert comma
    if (count === 3 && i !== 0) {
      result = "," + result;
      count = 0; // reset digit counter
    }
  }

  return result;
}