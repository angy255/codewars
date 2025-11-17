/*Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.*/

/* str
return boolean (true / false)
str.split('') method, convert the string into an array of characters
.reverse() method, reverse the array and see what it looks like
.join('') method to join the reversed array back into a string
lastly, our function will compare the original string with the reversed one to see if it is a palindrome*/

// my solution

// we are declaring our function and passing in the parameter of a str
function isPalindrome(str){
// make all characters same
  let newStr = str.toLowerCase();
  
  //reverse the string
 let reversed = newStr.split('').reverse().join('')
return newStr === reversed;
}

console.log (isPalindrome ('racecar'));