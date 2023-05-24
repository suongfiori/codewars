/* 
DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
// Solution

function isPangram(string) {
    let str = string.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    for (let char of alphabet) {
      if (!str.includes(char)) {
        return false; // If any letter is missing, return false
      }
    }
  
    return true; // All letters are present, so return true
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  