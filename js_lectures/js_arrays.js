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

/*

4. Iterate and Print Array
Iterate through a given array, printing each value. 
printArrayVals(arr)

PSEUDOCODE:

1.  Create a function called printArrayVals(arr) that accepts an array as input.
2.  Inside the function:
    a.  Create a for loop that starts i at 0, ends at arr.length, and increments by 1.
    b.  Inside the for loop:
        i.  Console.log each value in the array

*/

function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printArrayVals([11, 23, 44, 7, 0]);

/*

5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.

PSEUDOCODE:

1.  Create a function called printMaxOfArray(arr) that accepts an array as input.
2.  Inside the function:
    a.  Create a variable called big whose value is arr[0].
    b.  Create a for loop that starts i at 0, ends at arr.length, and increments by 1.
    c.  Inside the for loop:
        i.  Create a conditional that checks whether the current value in the array is larger than big.
        ii. If the current value is larger, make that the new big.
    d.  After the loop, console.log the final value of big.

*/

function printMaxOfArray(arr) {
  var big = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  console.log(big);
}

printMaxOfArray([-6, -3, -22, -67, -8, -1])