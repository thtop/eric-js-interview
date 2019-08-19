/**
 * 3 Different Ways to Create an Object
 *
 * List and describe 3 different ways of
 * creating an object in javascript.
 */

// 1 object literal syntax
const myBoat = {
    length: 24,
    maxSpeed: 45,
    passengers: 14,
    getLength: function () {
        return this.length;
    }
};

// 2 new keyword & Object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];

student.getclasse = function () {
    return this.classes;
};

// 3 constructor function
function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function () {
    return this.color;
};

const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);

console.log(carlysCar);
console.log(jimsCar);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());


// Constructor Function
function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');
var user2 = new User('Clarke', 'Griffin', 16, 'female');

console.log(user1);
console.log(user2);