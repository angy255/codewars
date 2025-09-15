// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.




//my solution

// function simpleMultiplication(number) {
//     // your code........
// }

//sounds like a conditional
//sounds like if else statement
//if number is even multiply number by 8
// if number is not even multiply number by 9


// let number=
// function simpleMultiplication(number) {
//     if number="even"{
//   else (number*8);
// }
  
let number = 2
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}