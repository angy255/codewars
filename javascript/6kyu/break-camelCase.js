/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// my solution

function solution(str) {
  let result = "";

  // loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // if the character is uppercase, add a space before it
    if (char >= 'A' && char <= 'Z') {
      result += " " + char;
    } else {
      result += char;
    }
  }

  return result;
}