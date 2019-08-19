/**
 * Equivalent Numbers
 */

console.log(900.9 === 3 * 300.3); // false

console.log(3 * 300.3); //900.9000000000001

console.log('toFixed: ', Number((300.2 * 3).toFixed(2))); // 900.6


console.log('toPrecision: ', Number((300.3 * 3).toPrecision(12))); //900.900000000

console.log((300.3 * 10) * 3 / 10); // 900.9