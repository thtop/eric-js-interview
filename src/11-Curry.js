/**
 * Curry Function
 *
 *
 */

// function getProduct(num1, num2) {
//     return num1 * num2;
// }
// console.log(getProduct(10, 20));

function getProduct(num1) {
    return function (num2) {
        return num1 * num2;
    };
}

//console.log(getProduct(10)(20));

/*
function getTravelTime(distance, speed) {
    return distance / speed;
}

console.log(getTravelTime(400, 50));
console.log(getTravelTime(400, 60));
console.log(getTravelTime(400, 80));
*/

function getTravelTime(distance) {
    return function (speed) {
        return distance / speed;
    };
}

const travalTimeBosNyc = getTravelTime(400);
const travalTimeMiabiAtlanta = getTravelTime(600);

console.log(travalTimeBosNyc(50));
console.log(travalTimeBosNyc(60));
console.log(travalTimeBosNyc(80));
