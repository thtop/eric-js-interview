/**
 * Equals vs Strict Equals
 *
 * - What is the difference between the comparison
 *   operators == and === ?
 *
 *   -> == (equals)
 *      - tests for abstract equality
 *      - does not test for data type
 *
 *   -> === (strict equals)
 *      - test for strict equality
 *      - does test for data type
 *
 */

console.log(7 == '7');  // true
console.log(7 === '7'); // false

/**
 *  What happens "under the hood" when using == to compare:
 *
 *  Comparing number & string -->
 *    - string is converted to a numbet
 *    - comparison is made
 *
 *  Comparing boolean & non-boolean
 *    - non-bolean is converted to a boolean
 *    - comparison is made
 *
 *  Comparing object & primitive data-type
 *   - object is converted to primitive data-type
 *   - comparison is made
 *
 */