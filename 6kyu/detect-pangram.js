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
  