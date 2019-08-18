/**
 * The 'this' Keyword
 * 
 * - What is the 'this' keyword and how is it used?
 *   -> It refers to whatever object it is directly inside of.
 *      Browser => console.log(this) // Window object
 */

 /*
 var house = {
     price: 100000,
     squareFeet: 2000,
     owner: 'Taylor',
     getProcePerSquareFoot: function() {
         return house.price / house.squareFeet;
     }
 };
 */

// 'this'
var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getProcePerSquareFoot: function() {
        return this.price / this.squareFeet;
    }
};

 console.log(house.price);
 console.log(house.getProcePerSquareFoot());

