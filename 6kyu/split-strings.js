/* 
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// Solution

        function splitIntoPairs(str) {
            // Create an array to store the pairs with the desired length of Math.ceil(str.length/2)
            const pairs = Array.from({ length: Math.ceil(str.length/2)}, (_, index) => {
                // Extract a pair of characters from the input string
            const pair = str.substr(index * 2, 2);  //substr(startIndex, length) method extracts characters from startIndex and continues for length characters.
            // Pad the pair with an underscore if it's length is odd
            return pair.length === 1 ? pair + '_' : pair;
            });
            
            return pairs;
        }
      
      console.log(splitIntoPairs('hello'));   // Output: [ 'he', 'll', 'o_' ]

// refactor:

function splitIntoPairs(str){
    return Array.from({length: Math.ceil(str.length/2)}, (_, index) => {
        const pair = str.substr(index*2, 2)
        return pair.length === 1 ? pair + "_" : pair
    })
}


      

