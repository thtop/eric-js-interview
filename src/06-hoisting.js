/** 
 * Variable and Function Hoisting 
 * 
 * - Describe what variable and function hoisting is and how it works.
 *   -> Variables and functions are hoisted to the top of the scope
 *      that they are declared in.
 * 
 */


 // ## Variable

//var color;

console.log(color); // undefined

var color = 'blue';

console.log(color); // blue


// ## Function

//var getProduct;

//console.log(getProduct(2, 3)); //getProduct is not a function // undefined

// function expression
var getProduct = function(num1, num2) {
    return num1 * num2;
};

console.log(getProduct(2, 3)); // ุ


// function deceration
console.log(getProduct(2, 3)); // 6

function getProduct2(num1, num2) {
    return num1 * num2;
}

// Function scoped
var globalVar = 'global';

(function() {
    // hoisting in function scoped
    var name = 'Jen';

    var getAge = function() {
        return '30';
    };

    function getState() {
        return 'Delaware';
    }
})();

/**
 * var (funciton scoped)
 *   - global scope
 *   - function scope
 * 
 * const, let (block scoped)
 *   - global scope
 *   - funciton scope
 *   - block scope
 *       -> for loop if slse statement
 *       -> while loop etc.
 */

 function getTotal() {

    console.log('multipler: ', multipler); // undefined
    //console.log('total: ', total);  // Cannot access 'total' before initialization
    console.log('i: ', i) // undefined

    let total = 0;

    for(var i = 0; i < 10; i++) {
        let valueToAdd = i;
        var multipler = 2;
        total += valueToAdd * multipler;
    }

    return total;
 }

 getTotal();

 // Hoisting 
 /*
 function getTotal() {
     let total;
     var multipler;
     var i;

     total = 0;

     for(var i = 0; i < 10; i++) {
         let valueToAdd;

         valueToAdd = i;
         multipler = 2;
         total += valueToAdd * multipler;
     }

     return total;
 }

getTotal();

*/