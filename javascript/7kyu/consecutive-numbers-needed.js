/*Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0 
my solution*/

function consecutive(array) {
  // If there are 0 or 1 elements, no numbers are missing
  if (array.length < 2) return 0;

  // Find min and max by spreading the array into Math.min/Math.max
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const min = Math.min(...array);
  const max = Math.max(...array);

  // Total numbers that should be present in a complete consecutive range
  // from min to max is (max - min + 1).
  const totalNeeded = max - min + 1;

  // The array already has arr.length numbers, so missing = totalNeeded - arr.length
  // This value will be >= 0 because array contains unique integers within the min..max range.
  const missing = totalNeeded - array.length;

  return missing;
}