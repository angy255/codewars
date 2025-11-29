/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

there will be no arrays with less than 2 elements
there will be no arrays where all elements are equal*/

// my solution

function isSortedAndHow(arr) {
  // check if array is sorted in ascending order
  // compare each element with the next one
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  
  const isAscending = arr.every((num, i) => {
    // for the last element, skip comparison
    if (i === arr.length - 1) return true;
    return num <= arr[i + 1];
  });

  // check if array is sorted in descending order
  const isDescending = arr.every((num, i) => {
    if (i === arr.length - 1) return true;
    return num >= arr[i + 1];
  });

  // return the string based on the checks
  if (isAscending) return "yes, ascending";
  if (isDescending) return "yes, descending";

  // if neither case matches, it's not sorted
  return "no";
}

// example
console.log(isSortedAndHow([1, 2, 3, 4]));       // "yes, ascending"
console.log(isSortedAndHow([4, 3, 3, 1]));       // "yes, descending"
console.log(isSortedAndHow([1, 3, 2]));          // "no"

