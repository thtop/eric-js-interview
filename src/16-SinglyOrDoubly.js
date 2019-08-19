/**
 * Singly or Doubly Invoked Function
 */

function getTotal() {
    var args = Array.prototype.slice.call(arguments);

    if (args.length === 2) {
        return args[0] + args[1];
    } else if (args.length === 1) {
        return function (num2) {
            return args[0] + num2;
        }
    }
}

// both return the total of the two numbers
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10)(20)); // 30
