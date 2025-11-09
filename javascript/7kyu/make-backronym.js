/*back·ro·nym
An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON

(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"*/

/* assume `dict` is preloaded and has keys "A" to "Z" with corresponding words
example: dict = { "D": "disturbing", "G": "gregarious", "M": "mustache", ... }*/

// my solution

function makeBackronym(str) {
  // convert the input string to uppercase to match dictionary keys
  const upperStr = str.toUpperCase();

  // initialize an empty array to store words
  let words = [];

  // loop through each character of the string
  for (let i = 0; i < upperStr.length; i++) {
    const letter = upperStr[i];
    // push the corresponding word from the dictionary into the words array
    words.push(dict[letter]);
  }

  // join the words into a single string with spaces
  return words.join(' ');
}