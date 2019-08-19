/**
 * Question:
 * What is logged out for each console.log statement?
 * 
 */

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object


console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

console.log([] instanceof Array); // true
console.log({} instanceof Array); // false