/*
ALL ALGORITHMS SHOULD BE WRITTEN AS FUNCTIONS
*/

/* 
1. Print 1-255
print1To255()
Print all the integers from 1 to 255. 
*/

function print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

console.log('********************');
console.log('PRINT 1 TO 255');
print1To255();

/* 
2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255. 
*/

function printOdds1To255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

console.log('********************');
console.log('PRINT ODDS 1 TO 255');
printOdds1To255();

/* 
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. 
*/

function printIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log('int: ' + i);
    sum += i;
    console.log('sum so far: ' + sum);
  }
}

console.log('********************');
console.log('PRINT INT5 AND SUM 0 TO 255');
printIntsAndSum0To255();

/* 
4. Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value.
*/

function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log('********************');
console.log('PRINT ARRAY VALS');
var testArr4 = ['blue', 5, 9, -2, false];
printArrayVals(testArr4);

/* 
5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.
*/

function printMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log('Max val: ' + max);
}

console.log('********************');
console.log('PRINT MAX OF ARRAY');
var testArr5 = [5, 23, -5, 61, 2, 10];
printMaxOfArray(testArr5);

/* 
6. Get and Print Average
printAverageOfArray(arr)
Analyze an array’s values and print the average.
*/

function printAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log('Average: ' + sum / arr.length);
}

console.log('********************');
console.log('PRINT AVERAGE OF ARRAY');
var testArr6 = [1, 2, 3, 4]
printAverageOfArray(testArr6);

/*
7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).
*/

function returnOddsArray1To255() {
  var oddsArr = [];
  for (var i = 0; i <= 255; i++) {
    if (i % 2 != 0) {
      oddsArr.push(i);
    }
  }
  return oddsArr;
}

console.log(returnOddsArray1To255());

/*
8. Square the Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.
*/

function squareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

var testArr8 = [1, 2, 3, 4]
console.log(squareArrayVals(testArr8));

/*
9. Greater than Y
returnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.
*/

function returnArrayCountGreaterThanY(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  return count;
}

var testArr9 = [-6, 88, 3, 71, 34, -23, 10];
var val = 50;
console.log(returnArrayCountGreaterThanY(testArr9, val));

/*
10. Zero Out Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.
*/

function zeroOutArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

var testArr10 = [-6, 32, -10, 5, 23, -88]
console.log(zeroOutArrayNegativeVals(testArr10));

/*
11. Max, Min, Average
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.
*/

function printMaxMinAverageArrayVals(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    // read arr[i] as "the current element in the array"
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log('Max: ' + max + ', Min: ' + min + ', Avg: ' + sum/arr.length);
}

var testArr11 = [10, 5, -4, 3, 88, 100, 32, -5];
printMaxMinAverageArrayVals(testArr11);

/*
12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
*/

function shiftArrayValsLeft(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr[arr.length-1] = 0;
  console.log(arr);
}

var testArr12 = [1, 2, 3, 4, 5];
shiftArrayValsLeft(testArr12);

/*
13. Swap String For Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'.
*/

function zeroOutArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

var testArr13 = [-6, 32, -10, 5, 23, -88]
console.log(zeroOutArrayNegativeVals(testArr13));