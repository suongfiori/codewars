// Instruction
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// Solutions

function digitalRoot(n) {
    // Convert the number 'n' to a string, then create an array of its individual digits
    let sum = Array.from(String(n), digit => Number(digit))
    // Use the reduce method to sum up the digits of the array
    .reduce((accum, currVal) => accum + currVal, 0)

    // Check if the sum is less than 10 (i.e., a single-digit number)
    // If true, return the sum as the digital root
    // If false, RECURSIVELY call the digitalRoot function with the sum as the new input

    return n < 10 ? n : digitalRoot(sum)
}


console.log(digitalRoot(4343))