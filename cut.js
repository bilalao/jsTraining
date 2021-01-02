'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

// You must write your own tests
//throw Error('No tests !')

// first function
const cutFirst= str => {
return str.slice(str.lenght,-2);
}
 // Second function
 const cutLast= str => {
return str.slice(2);
}
 // third function
 const cutFirstLast= str => {
 	var fst =cutLast(str);
 	var fst2 = cutFirst(fst);
 	return fst2;
}
// begin of tests

const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function')
assert.strictEqual(typeof cutLast, 'function', 'Should be a function')
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function')
assert.strictEqual(cutFirst('mohammed'), 'mohamm')
assert.strictEqual(cutLast('mohammed'), 'hammed')
assert.strictEqual(cutFirstLast('mohammed'), 'hamm')


