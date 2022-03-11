/* 

Primitive datatypes - strings, numbers, booleans, null, undefined

Null is usually intended by the developer, while undefined is not.

*/

var someVariable;

var otherVariable = null;

// console.log(someVariable);
console.log(otherVariable);

/*

Reference Datatypes: Arrays, Objects

Arrays - What are they even?

Arrays can hold more than one value. Each value has an index, and indexes always start with a zero.

Arrays can mix and match datatypes within the same array.

*/

var colors = ['blue', 'yellow', 'green', 'red'];

var narciso = ['narciso', 23, false];

// Getting and setting values in an array

// Getting a value using bracket notation.
console.log(colors[0]);

// Setting a value using bracket notation.
colors[0] = 'purple';
console.log('changed first element to purple');
console.log(colors);

// Built-in Methods

// Push - the push() method adds a value to the end of an array.

colors.push('brown');
console.log('pushed brown at end');
console.log(colors);

// Pop - the pop() method removes a value from the end of an array and returns it.

var lastElement = colors.pop();
console.log('removed brown from end');
console.log(colors);
console.log('last element is:', lastElement);

var numbers = [4, 1, 7, 89, 3, 65, 23, 6, 11, 13];

// console.log(numbers.length);

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}