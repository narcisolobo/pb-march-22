/* 

Functions - what are they even?
A function is a set of instructions that accomplishes a task. These functions may or may not require ingredients or input to accomplish their tasks. These ingredients are called parameters.

A function does not get executed (run) until the function is called, or invoked. You call a function by its name, giving it any ingredients the function may need.

The value of a function is whatever that function returns.

The return statement ends a function. Any code following a return will not be executed.

*/

/*

A wrinkle regarding the var keyword:
A variable created with the var keyword has "function scope". It only exists in the function in which it is created. It is inaccesible outside of the function. If a variable is created with var outside of a function, it is accesible anywhere - we call this "global scope".

*/

// Function declaration
function addTwoNums(num1, num2) {
  var sum = num1 + num2;
  console.log(sum)
  return sum;
}

// Function call with arguments passed to function
var result = addTwoNums(2, 2); // --> 4

// When we console.log a function call, we console.log whatever that function returns.
console.log(addTwoNums(4, 5)); // --> 9, 9

// Predict
console.log(result); // --> 4

/* Print 1-255
print1To255()
Print all the integers from 1 to 255.  */

function printNumToNum(startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    console.log(i);
  }
}

printNumToNum(5, 39);

/* 2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255.  */

function printOddsNumToNum(startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    if (i % 2 == 1) {
      console.log(i)
    }
  }
}

printOddsNumToNum(2, 100)

/*

3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and after each integer, print the running total of all integers so far.

0 - int
0 - run tot
1 - int
1 - run tot
2 - int
3 - run tot
3 - int
6 - run tot
4 - int
10 - run tot

PSEUDOCODE:
1.  Create a function called printIntsAndSum0To255 without parameters
2.  Inside the function:
    a.  Create a variable to hold the running total whose is 0
    b.  Create a for loop that starts i at 0, ends at 255, and increments by 1
    c.  Inside the for loop:
        i.   Print the current value of i
        ii.  Add the current integer to the running total
        iii. Print the running total
*/

