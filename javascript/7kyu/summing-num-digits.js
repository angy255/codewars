/*Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.*/

// my solution

function sumDigits(number) {
  // convert the number to a positive number and then to a string
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString */
  const strNum = Math.abs(number).toString();

  // initialize a variable to hold the sum
  let sum = 0;

  // loop through each character (digit) in the string
  for (let i = 0; i < strNum.length; i++) {
    // convert the character to a number and add it to the sum
    sum += Number(strNum[i]);
  }

  // return the sum
  return sum;
}