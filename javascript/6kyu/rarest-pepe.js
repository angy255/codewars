/*The pepe market is on the verge of collapse. In a last-ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the internet to identify the rarest ones, which are worth more. Since doing this by hand would be tedious, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a non-empty list of pepes (pepes), returns the rarest pepe in the list.

If two or more pepes are equally rare, return a sorted list of these pepes.
If the rarest pepe (or pepes) has a frequency of 5 or more, then there are no truly rare pepes, so your function should return "No rare pepes!".*/

//my solution

function findRarestPepe(pepes) {
  // step 1: create an array of unique pepes
  const uniquePepes = [];
  for (let i = 0; i < pepes.length; i++) {
    if (!uniquePepes.includes(pepes[i])) {
      uniquePepes.push(pepes[i]);
    }
  }

  // step 2: count occurrences for each unique pepe
  let minFreq = Infinity;
  const rarePepes = [];

  for (let i = 0; i < uniquePepes.length; i++) {
    const pepe = uniquePepes[i];
    let count = 0;

    // count how many times this pepe appears
    for (let j = 0; j < pepes.length; j++) {
      if (pepes[j] === pepe) {
        count++;
      }
    }

    // track the lowest frequency found so far
    if (count < minFreq) {
      minFreq = count;
    }
  }

  // step 3: if the rarest frequency is 5 or more → not rare
  if (minFreq >= 5) {
    return "No rare pepes!";
  }

  // step 4: collect all pepes that have this rarest frequency
  for (let i = 0; i < uniquePepes.length; i++) {
    const pepe = uniquePepes[i];
    let count = 0;

    for (let j = 0; j < pepes.length; j++) {
      if (pepes[j] === pepe) {
        count++;
      }
    }

    if (count === minFreq) {
      rarePepes.push(pepe);
    }
  }

  // step 5: return one pepe if only one is rare, else return sorted list
  if (rarePepes.length === 1) {
    return rarePepes[0];
  } else {
    // sort alphabetically 
    return rarePepes.sort();
  }
}