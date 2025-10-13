/*Description:
In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Examples
 n = 2; limit = 6 --> [2, 4, 6]
 n = 2; limit = 5 --> [2, 4]*/

/*my solution

function findMultiples(integer, limit) {
  your code here
}*/

//so we change the two integers to what is provided, n and limit as per instructions
function findMultiples(n, limit) {
//create an empty array first
  let result = []; 
  for (let i = n; i <= limit; i += n) {
//the .push () method is a built-in function that puts a new item at the end of that list, add each multiple of n
    result.push(i); 
  }
//then we write return because it is included in the instructions and we want to return the filled array
  return result;
}
