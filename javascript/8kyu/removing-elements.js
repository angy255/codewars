/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/




//my solution

function removeEveryOther(arr){
  //your code here
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

/*create an empty array called result to put elements we keep (always keep first element)
create a for loop
use index 0 as first element
i < arr.length loop as long as i is within the array
i += 2 increase i by 2 so loop skips every second element
add the current element to the result array
return the new result array
arr would be replaced with the word keep*/