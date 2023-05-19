// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let i; //Declare a variable to keep track of the number of multiplicative operations
    for(i=0; num.toString().length > 1; i++) {

        // Convert the number to a string and check if it has more than one digit
        // If it does, continue the loop; otherwise, exit the loop

        num = Array.from(String(num), digit => Number(digit)) // Convert the number to an array of its digits
        .reduce((a, b) => a*b, 1) //initializing the accumulator to 1 for the multiplication operation to correctly calculate
        
        // Multiply all the digits together using the reduce() method,
        // starting with an initial accumulator value of 1
        // Update the num variable with the product of the digits
    }
    return i;
}
console.log(persistence(999))
