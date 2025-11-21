/*You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.*/

// my solution

function oddBall(arr) {
  let oddIndex = -1;

  // find the index of the odd word
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // only set oddIndex if we haven't found it yet
    if (
      oddIndex === -1 &&           // we haven't found the odd word yet
      typeof item === "string" &&  // it's a string
      item.toLowerCase() !== "even" // and it's not "even"
    ) {
      oddIndex = i;
    }
  }

  // no odd word found → no valid index possible
  if (oddIndex === -1) return false;

  // check if any number matches that index
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (typeof item === "number" && item === oddIndex) {
      return true;
    }
  }

  return false;
}


console.log(oddBall(["even", "even", "oddword", 2])); 
// → true