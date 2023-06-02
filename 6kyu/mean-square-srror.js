/* 
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
*/

// Solution

function meanSquareDifference(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        throw new Error("Input arrays must have the same length");
      }
    
      const differences = firstArray.map((x, i) => x - secondArray[i]);
      const sumOfSquares = differences.map(n => n ** 2).reduce((a, b) => a + b, 0);
      return sumOfSquares / differences.length || 0;
  }

// Option 2

// function meanSquareDifference (firstArray, secondArray) {
//     const firstArray = firstArray.map((x, i) => x - secondArray[i])
//     const sum = arr.map(n => Math.pow(n, 2)).reduce((a, b) => a+b, 0)
//     return (sum / arr.length) || 0
// }

console.log(meanSquareDifference([-1, 0], [0, -1]));