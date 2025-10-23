/*Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

"camel_case" --> "camelCase"
"zebulans_nightmare" --> "zebulansNightmare"
"get_string" --> "getString"
"convert_to_uppercase" --> "convertToUppercase"
"main" --> "main"

my solution*/

function zebulansNightmare(name) {
  //split the input string into parts wherever there is an underscore
  const parts = name.split('_');
  
  //start with an empty string for the result
  let result = '';
  
  //loop through each part of the split string
  for (let i = 0; i < parts.length; i++) {
    const word = parts[i];
    
    if (i === 0) {
      //the first word stays in lowercase
      result += word;
    } else {
      //capitalize the first letter and add the rest of the word
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
      result += capitalized;
    }
  }
  
  //return the final camelCase string
  return result;
}