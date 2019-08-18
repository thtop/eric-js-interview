/**
 * Closures
 * 1. What is a closure?
 *    A closure is an inner function that had access to the scope
 *    of an enclosing function
 * 
 *    A closure has access to variables in 3 separate scopes:
 *    1. Variables in its own scope
 *    2. Variables in the scope of the outer funciton
 *    3. Variables in the global scope
 * 
 *    The closure also has access to:
 *    1. Its own parameters
 *    2. Parameters of outer function(s)
 * 
 * 2. Code out an example closure that functions properly.
 */

const globalVariable = 'global var';

function outterFunc(param1) {
    const variable1 = 'var one';

    function innerFunc(param2) {
        const variable2 = 'var two';

        console.log('globalVariable: ', globalVariable);
        console.log('variable1: ', variable1);
        console.log('variable2: ', variable2);
        console.log('param1: ', param1);
        console.log('param2: ', param2);
    }

    innerFunc('param one');
}

outterFunc('param two');