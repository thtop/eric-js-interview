/**
 * Problem:
 * - Write a function that keeps track of how many
 *   times it was called and returns that number.
 * 
 * - All functionlity should be inside of the function
 *   - none outside.
 * 
 * use Closures
 * 
 */

// function myFunc() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// console.log(myFunc()); // return 1
// console.log(myFunc()); // return 2
// console.log(myFunc()); // return 3


function myFunc() {
    let count = 0;

    return function () {
        if (count < 4) {
            // some computation/functionality...
        } else {
            // throw error
        }

        count++;
        return count;
    };
}

console.log(myFunc());

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());