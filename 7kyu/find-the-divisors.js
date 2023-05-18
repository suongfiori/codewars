// instruction
// Create a function named divisors/Divisors that takes an integer n > 1 and 
// returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


function findDivisors(n) {
    if (n<1) {
        console.log("Wrong input")
        return []
    }
    let divisors = [];
    for (let i=2; i<n; i++){
        if (n % i === 0) {
         divisors.push(i)
         }
    }
    if (divisors.length === 0) {
        return `${n} is prime`
    }
    return divisors;
}

console.log(findDivisors(12))