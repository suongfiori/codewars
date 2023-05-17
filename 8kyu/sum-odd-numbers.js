
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Solutions

// solution 1
function rowSumOddNumbers(n) {
    let startNum = n*(n-1) + 1;
    let sum = 0;
    for (let i=0; i<n; i++) {
        sum += startNum + (2*i);
    }
    return sum;
}

// solution 2
function rowSumOddNumbers(n) {
    const startNum = n*(n-1) + 1;
  let row = Array.from({length: n}, (_, index) => startNum + (2*index));
  let sum = row.reduce((accum, currVal) => accum + currVal, 0)
  return sum;
}

// solution 3: with error handling
function rowSumOddNumbers(n) {
    return n > 0 ? Math.pow(n, 3) : "wrong input!";
  }