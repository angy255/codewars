/*Story
You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

But at the end of the day you realise not everybody did the same amount of work.

To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

Kata Task
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

Example
For start = 125, and end = 132

The letterboxes are

125 = 1, 2, 5
126 = 1, 2, 6
127 = 1, 2, 7
128 = 1, 2, 8
129 = 1, 2, 9
130 = 1, 3, 0
131 = 1, 3, 1
132 = 1, 3, 2
The digit frequencies are:

0 is painted 1 time
1 is painted 9 times
2 is painted 6 times
etc...
and so the method would return [1,9,6,3,0,1,1,1,1,1]

Notes
0 < start <= end
In C and NASM, the returned value will be free'd.*/

// my solution

function paintLetterboxes(start, end) {
  // create an empty array that will hold the counts for digits 0–9
  const counts = [];

  // fill the array with 10 zeros (one for each digit)
  for (let i = 0; i < 10; i++) {
    counts.push(0); // push a zero into the array
  }

  // loop through every number from start to end 
  for (let num = start; num <= end; num++) {

    // convert the number to a string so we can look at each digit
    const digits = String(num);

    // loop through each character (digit) in the number
    for (const digit of digits) {
      // convert the character back to a number
      const d = Number(digit);

      // increase the count for that digit
      counts[d]++;
    }
  }

  // return the full array of digit counts
  return counts;
}

// example
console.log(paintLetterboxes(125, 132));