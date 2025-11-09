/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/
// my solution

/*
 find the number with the most digits in an array.
 if two numbers have the same number of digits, the first one in the array is returned.
 param {number[]} arr - array of numbers to check
 returns {number} the number with the most digits
 */
function findLongest(arr) {
  // handle edge cases (empty array or invalid input)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  if (!Array.isArray(arr) || arr.length === 0) {
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    throw new Error("provide a non-empty array of numbers");
  }

  //initialize with the first number in the array
  let maxNum = arr[0];

  //helper function to count digits (handles negatives correctly)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  const digitCount = (num) => Math.abs(num).toString().length;

  // iterate through array
  for (let i = 1; i < arr.length; i++) {
    // compare the number of digits
    if (digitCount(arr[i]) > digitCount(maxNum)) {
      maxNum = arr[i]; // update if current number has more digits
    }
  }

  return maxNum;
}

