/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None
*/

// Solution

function firstNonRepeatingLetter(s) {
    const newStr = s.toLowerCase()
    for(let i = 0; i < newStr.length; i++) {
        if(newStr.indexOf(newStr[i]) === newStr.lastIndexOf(newStr[i])) {
            return s[i]
        }
    }
    return ""
}
console.log(firstNonRepeatingLetter("stress")); // Output: "t"
console.log(firstNonRepeatingLetter("sTreSS")); // Output: "T"
 
/*
The lastIndexOf() function in JavaScript is a method available on strings and arrays. 
It returns the index of the LAST OCCURRENCE of a specified element within the given string or array.

For strings:
let str = "Hello, world!";
let lastIndex = str.lastIndexOf("o");
console.log(lastIndex); // Output: 8
If the element is not found in the string or array, lastIndexOf() returns -1.

For arrays:
let arr = [1, 2, 3, 4, 2, 5];
let lastIndex = arr.lastIndexOf(2);
console.log(lastIndex); // Output: 4
*/
  

  