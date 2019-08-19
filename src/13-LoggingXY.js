// What is the value of y when it is logged out?
// What is the value of x when it is logged out?

(function () {

    /**
     * y = 200;
     * var x = y;
     */

    var x = y = 200;
})();

console.log(`y: ${y}`); // 200 (Global)
console.log(`x: ${x}`); // undefined