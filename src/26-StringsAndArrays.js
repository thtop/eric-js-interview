
/**
 *  Srtings and Arrays 
 */

const data1 = 'Jordan Smith';

// Array.property.filter...
const data2 = [].filter.call(data1, function (elem, index) {
    return index > 6;
});

// only use 'read-only' 
// method: filter, forEach, map, some, every, etc.

// cannot use: push, pop, splice, shift, reverse, etc.

console.log(data2);