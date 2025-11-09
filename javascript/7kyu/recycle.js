/*You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

[plastic, glass, card]
The material type can be determined based on the sign of the item's value:

Plastic: value > 0
Glass: value < 0
Card: value = 0
Example
rubbish = [5, -9, 0, 6, -84, -95, 15]
// Plastic = 3, Glass = 3, Card = 1
// Output: [3, 3, 1]*/

// my solution

function recycleMe(recycle) {
  // initialize counters for each type: [plastic, glass, card]
  let plastic = 0;
  let glass = 0;
  let card = 0;

  // loop through each item in the recycle array
  for (let i = 0; i < recycle.length; i++) {
    const item = recycle[i];

    if (item > 0) {
      // positive values are plastic
      plastic++;
    } else if (item < 0) {
      // negative values are glass
      glass++;
    } else {
      // zero values are card
      card++;
    }
  }

  // return the counts as an array [plastic, glass, card]
  return [plastic, glass, card];
}