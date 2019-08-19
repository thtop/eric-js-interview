/**
 * Task:
 * 1. Describe what JSON format is.
 *    - JSON: JavaScript Object Notation
 *    - Light-weight format for transferrig data
 *
 *    JSON is used because:
 *    1. It is easy for humans to understand
 *    2. It is easy for computers to parse & generate
 *
 * 2. Delete the data types not permitted in JSON.
 * 3. Replace placholder-text with the corresponding
 *    data type, properly formatted as JSON.
 */

/*
const myJsonObj = {
    myString: [some string],
    myNumber: [some number],
    myNull: [null],
    myBoolean: [false],
    //myUndefined: [undefined],
    myArray: [some array],
    //myFunction: [some function],
    myObject: [some object]
};
*/


const myJsonObj = {
    "myString": 'hello world',
    "myNumber": 1234.34,
    "myNull": null,
    "myBoolean": true,
    //myUndefined: [undefined],
    "myArray": [20, 30, 'orange'],
    //myFunction: [some function],
    "myObject": {
        "name": 'Same',
        "age": 30
    }
};