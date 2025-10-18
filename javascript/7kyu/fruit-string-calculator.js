/*You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40*/


// my solution
function calculate(string) {
  // split the string by spaces
  const words = string.split(" ");
  const numbers = [];
  let operator = ""; // use an empty string

  // loop through each word
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    //check if the word is a number
    if (!isNaN(word) && word !== "") {
      numbers.push(Number(word));
    }

    //identify operator
    if (word === "gains") {
      operator = "gains";
    } else if (word === "loses") {
      operator = "loses";
    }
  }

  // perform the correct calculation
  if (operator === "gains") {
    return numbers[0] + numbers[1];
  } else if (operator === "loses") {
    return numbers[0] - numbers[1];
  }

  // if no operator found, just return undefined
}