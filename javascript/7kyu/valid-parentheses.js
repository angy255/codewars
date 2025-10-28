/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.*/

// my solution
/*
check if a string of parentheses is valid (balanced).
param {string} parenStr - The input string containing only '(' and ')'
returns {boolean} - returns true if parentheses are balanced, false otherwise
 */

function validParentheses(parenStr) {
  let balance = 0; // keeps track of open '(' that need to be closed

  for (let char of parenStr) {
    if (char === '(') {
      balance++; // one more open bracket to close
    } else if (char === ')') {
      balance--; // one closing bracket found

      // if we ever have more ')' than '(' before matching, it's invalid
      if (balance < 0) return false;
    }
  }

  // in the end, all '(' should be closed, so balance should be 0
  return balance === 0;
}