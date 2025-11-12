/*You get an array of different numbers to sum up. But there is one problem, those numbers all have different bases. For example:

You get an array of numbers with their base as an input:

[["101",16],["7640",8],["1",9]]
The output should be the sum as an integer value with a base of 10, so according to the example this would be:

4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751
Bases can be between 2 and 36 (2<=base<=36)*/

// my solution

/*function to sum numbers given as strings with different bases
 param {Array} arr - array of pairs 
 returns {Number} - the total sum in base 10
 */
function sumItUp(arr) {
  // initialize sum to 0
  let total = 0;

  // loop through each element in the array
  for (let [numStr, base] of arr) {
    // convert the number string from its base to an integer (base 10)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    const decimalValue = parseInt(numStr, base);

    // add the decimal value to the running total
    total += decimalValue;
  }

  // return the final sum as a base 10 integer
  return total;
}