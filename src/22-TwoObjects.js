/**
 * Two Objects
 */

const user1 = {
    name: 'Jordan',
    age: 28
};

const user2 = {
    name: 'Jordan',
    age: 28
};

//const user1 = user2; // true

console.log(user1 == user2); // false
console.log(user1 === user2); // false

/**
 * compare properties
 */
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true

// Array
console.log(' *** Array ***');
console.log([] == []); // false
console.log(JSON.stringify([]) === JSON.stringify([])) // true