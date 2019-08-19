/**
 * Object Properties
 */

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

console.log(b['name']);
console.log(c['name']);

a[b] = 200;
// a['object Object'] = 200;
a[c] = 400;
// a['object Object'] = 400;

console.log('a: ', a); //a:  { '[object Object]': 400 }
console.log('a[b]', a[b]); // a[b] 400
console.log('a[c]', a[c]); // a[c] 400
// console.log(a['[object Object]']);