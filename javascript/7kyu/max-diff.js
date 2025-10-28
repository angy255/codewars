/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7*/

/* my solution

returns the difference between the largest and smallest number in an array,
param {number[]} list - array of integers (may include negatives)
returns {number} - the difference between max and min values, or 0 if list is empty or has one element
 */

function maxDiff(list) {
  // if the array is empty or has only one element, return 0
  if (list.length <= 1) return 0;

  // initialize min and max with the first element
  let minVal = list[0];
  let maxVal = list[0];

  // loop through the array to find actual min and max
  for (let i = 1; i < list.length; i++) {
    const current = list[i];

    if (current > maxVal) {
      maxVal = current; // update max if current is larger
    }
    if (current < minVal) {
      minVal = current; // update min if current is smaller
    }
  }

  // return the difference between max and min
  return maxVal - minVal;
}