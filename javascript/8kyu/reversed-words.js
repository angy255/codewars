// Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//my solution

// reverse the words within the string
// reverse() from mdn
//first split the string into an array of words
//then reverse the order of words in array
//finally join the reversed words back into string

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
//ok we know this is correct but how to try it out now?