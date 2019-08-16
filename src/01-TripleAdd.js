/**
 * Triple Add
 * 
 * tripleAdd(10)(20)(30); 
 * -> returns total of all 3 number
 * 
 * -> Curried function -> 
 * -> Is the technique of translating one funciton 
 *    that takes multiple arguments 
 *    into a sequence of functions 
 *    that each take a single argument
 * 
 *    Sequence of function in which each function 
 *    in the sequence takes in one or multiple arguments
 * 
 */

function tripleAdd(number1) {
    return function(number2) {
        return function(number3) {
            return number1 + number2 + number3;
        }
    }
}

const result = tripleAdd(10)(20)(30);
console.log(result); // 60


/**
 * quadruple add
 * -> have a sequence of functions 
 *    where two of the function take in a single argument
 *    and our last function takes two arguments
 */

function tripleAdd2(number1) {
    return function(number2) {
        return function(number3, number4) {
            return number1 + number2 + number3 + number4; 
        }
    }
}

const result2 = tripleAdd2(10)(20)(30, 40);
console.log(result2); // 100


/**
 * Single function
 */
function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(tripleAdd1(10, 20, 30));
