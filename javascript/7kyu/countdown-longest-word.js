/*Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

Task
Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

Examples
letters = "ZZZZZZZZZ"
longest word = None

letters = "POVMERKIA", 
longest word = ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = ["PALMED", "VALVED", "VAMPED"]*/

// my solution

function longestWord(letters) {
  // create a frequency counter for the 9 letters
  const letterCount = getLetterCount(letters);

  let longest = [];   // store the longest valid words found so far
  let longestLength = 0;

  // loop through every word in the provided dictionary
  for (const word of words) {
    // skip if the word is longer than 9 characters (cannot be formed)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
    if (word.length > 9) continue;

    // check if this word can be formed from the available letters
    if (canFormWord(word, letterCount)) {
      // if this word is longer than any we’ve found, replace the list
      if (word.length > longestLength) {
        longestLength = word.length;
        longest = [word];
      }
      // if this word ties in length, add it to the results
      else if (word.length === longestLength) {
        longest.push(word);
      }
    }
  }

  // if no valid words found, return null
  if (longest.length === 0) return null;

  // if multiple words tie for longest, return in alphabetical order
  return longest.sort();
}

// ---------------------------------------------

// helper functions

// count occurrences of each letter in a string
function getLetterCount(str) {
  const count = {};
  for (const ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }
  return count;
}

// check if a word can be constructed from available letters
function canFormWord(word, available) {
  const needed = {};

  // count letters required for this word
  for (const ch of word) {
    needed[ch] = (needed[ch] || 0) + 1;

    // if demand for a letter exceeds supply, fail early
    if (!available[ch] || needed[ch] > available[ch]) {
      return false;
    }
  }

  return true; // all letters are available in sufficient quantity
}