/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// Solution

  function toCamelCase(str) {
    // Split the string into an array of words using dashes or underscores as delimiters
    const words = str.split(/[-_]/);

  // Map over the words array and convert each word to camel case
    return words.map(function(word, index) {
         // For the first word, leave it unchanged
         // Capitalize the first letter and convert the rest to lowercase
       return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(""); // Join the words back together without any separator
  }

  
console.log(toCamelCase("The-stealth-warrior"))