'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

// You must write your own tests
//throw Error('No tests !')
//function
const capitalize = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize("hi"), "Hi")
assert.strictEqual(capitalize("Hi there"), "Hi There")
assert.strictEqual(capitalize("javascript is a strong language"), "Javascript Is A Strong Language")
// End of tests */