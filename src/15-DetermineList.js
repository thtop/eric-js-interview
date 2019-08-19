/**
 * Determine 'list2'
 */

/*
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2); // passing by reference
*/

/*
const list1 = [1, 2, 3, 4, 5];

const list2 = list1.slice(); // copy return new array

list1.push(6, 7, 8);

console.log('List 1: ', list1); // List 1:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('List 2: ', list2); // List 2:  [ 1, 2, 3, 4, 5 ]

*/

/*
const list1 = [1, 2, 3, 4, 5];

const list2 = list1.concat([]);

list1.push(6, 7, 8);

console.log('List 1: ', list1); // List 1:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('List 2: ', list2); // List 2:  [ 1, 2, 3, 4, 5 ]
*/

const list1 = [1, 2, 3, 4, 5];

const list2 = [];
// use for loop...

list1.push(6, 7, 8);