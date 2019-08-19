/**
 * Log Number Function
 *
 */

var num = 50;

function logNumber() {
    console.log(num); // undefined
    var num = 100;
}

logNumber();

/*
var num = 50;

function logNumber() {
    var num; // hoisting

    console.log(num); // undefined
    num = 100;
}

logNumber();

*/

/*
var num = 50;

function logNumber() {
    console.log(num); // 50
}

logNumber();
*/


/** ES6 */
/*
let num = 50;

function logNumber() {
    console.log(num); // ReferenceError: num is not defined
    let num = 100;
}

logNumber();
*/