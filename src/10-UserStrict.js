//'use strict';
/**
 * QUESTION:
 *  - What does using 'strict mode' do to your code?
 *  - What are the benefits of using 'strict mode'?
 *    -> fail fast & fail loudly
 */

// var, let, const

// city = 'London'; 

// console.log(city); //ReferenceError: city is not defined

/*
function myFunc(a, a, b) {
    console.log(a, a, b);
}

myFunc(1, 2, 3); //SyntaxError: Duplicate parameter name not allowed in this context

*/

delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() 

