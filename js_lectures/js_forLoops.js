/* 

Loops - what are they and why do I need them?
What do they do?

Loops help keep our code D.R.Y.

Don't Repeat Yourself

Four things needed for a for loop:
1. Sentry
2. Where it starts
3. Where it ends
4. How it changes

Longhand:
i = i + 1
Shorthand version 1:
i++
Shorthand version 2:
i+=1

NODE
Node is a runtime.
We can enter the node REPL by typing the node command in our terminal.
Read - Evaluate - Print - Loop

*/

for (var i = 1; i <= 100; i++) {
  console.log(i);
}

/* Print 1-255
Print1To255()
Print all the integers from 1 to 255.  */

for (var i = 1; i <= 255; i++) {
  console.log(i);
}

/* 2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.  */

/* for (var i = 1; i <= 255; i+=2) {
  console.log(i);
} */

/* The percent sign is what we call a modulous or modulo. It returns the REMAINDER of division. */

// console.log(15 % 5 == 0)

for (var i = 1; i <= 255; i++) {
  // check if i is odd
  if (i % 2 == 1) {
    console.log(i);
  }
}

/* 3. Print Ints and Sum 0-255
PrintIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far.

Expected output:
0 0
1 1
2 3
3 6
4 10
...

Create a variable called runningTotal with the value of 0
Create a for loop that starts i at zero, ends at 255, and increases by 1 (increments by 1)
Inside the loop:
  print the integer
  add the integer to runningTotal
  print runningTotal
*/

var runningTotal = 0;
for (var i = 0; i <= 255; i++) {
  console.log(i);
  runningTotal += i;
  console.log(runningTotal)
}