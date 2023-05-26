/* 
DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/


// Solution 1

// function likes(names) {
//     switch (names.length) {
//         case 0:
//             return 'no one likes this';
//         case 1:
//             return names[0] + ' likes this';
//         case 2:
//             return names[0] + ' and ' + names[1] + ' like this';
//         case 3:
//             return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//         default:
//             return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }

// Solution 2

function likes(names) {
    const length = names.length;
    switch (length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names.slice(0, 2).join(', ')} and ${length - 2} others like this`;
            // slice() method extracts elements starting from index 0 up to, but not including, index 2
            // joins them into a string with a comma and space between them
    }
}

// TEST CASES
console.log(likes(["Peter", "James", "Andrea", "Tom", "Kate"])) // Output: Peter, James and 3 others like this
