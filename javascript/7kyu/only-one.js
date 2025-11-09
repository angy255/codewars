/*Task: Write function only_one which return True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false*/

//my solution

function onlyOne(...flags) {
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  // if no arguments are passed, return false
  if (flags.length === 0) return false;

  // count how many values are true
  let trueCount = 0;

  for (let flag of flags) {
    if (flag === true) {
      trueCount++;
      // ff more than one true, we can return false
      if (trueCount > 1) return false;
    }
  }

  // return true only if exactly one true was found
  return trueCount === 1;
}