/**
 * What is an IIFE?
 * 
 * 1. What is an IIFE and why are they used?
 *    IIFE: Immediately Invoked Function Expression
 *    - A function that is executed right after it is created
 *    - Make own privage scope
 * 
 * 2. code out an exmaple IIFE that function s properly
 */

// function doubleNumber(num) {
//     return num * 2;
// }
// console.log(doubleNumber(10));

// IIFE
(function doubleNumber(num) {
    return num * 2;
})(10);


(function() {

    function getTotal(a, b) {
        return a + b;
    }

    var $ = 'currency';

    if (true) console.log('Hello world!');

})();