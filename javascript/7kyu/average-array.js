/*Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]*/

/* my solution
calculates the average of numbers at each index across multiple arrays.

@param {number[][]} arr2D - a 2D array where each element is an array of numbers.
                               each nested array should ideally have the same length.
                               example: [[1,2,3], [4,5,6]]
 
@returns {number[]} - returns a new array containing the average of numbers at each index across all nested arrays.
                        the length of the returned array matches the length of the nested arrays.
                        example: [ (1+4)/2, (2+5)/2, (3+6)/2 ] => [2.5, 3.5, 4.5]
 */
function avgArray(arr2D) {
  if (arr2D.length === 0) return [];

  const length = arr2D[0].length;
  const averages = [];

  for (let i = 0; i < length; i++) {
    let sum = 0;

    for (let j = 0; j < arr2D.length; j++) {
      sum += arr2D[j][i];
    }

    averages.push(sum / arr2D.length);
  }

  return averages;
}

// examples
console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));
// Output: [3, 4, 5, 6]

console.log(
  avgArray([
    [2, 3, 9, 10, 7],
    [12, 6, 89, 45, 3],
    [9, 12, 56, 10, 34],
    [67, 23, 1, 88, 34],
  ])
);
// Output: [22.5, 11, 38.75, 38.25, 19.5]