/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

// Solution

function expandedForm(num) {
    const numStr = num.toString()
    return numStr
      .split('')
      .map((digit, index) => digit * Math.pow(10, numStr.length - index - 1)) // Calculate the expanded form for each digit
      .filter(term => term !== 0) // Remove any terms that are zero, e.g 100 + 0 + 20 + 3 => 100 + 20 + 3 instead
      .join(' + ')
  }
  
  console.log(expandedForm(1023))