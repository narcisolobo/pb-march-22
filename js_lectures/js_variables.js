// Comments are lines of code that do not get executed. They're just notes and memos, etc. for us as developers.

// Single line comment

/* 

Multi-line comment

Variables - What are they even?
A variable is a tool we can use to store data.


*/

// Creating a variable
// 1. var keyword
// 2. name of variable
// 3. assignment operator =
// 4. value of the variable

/* 

What kind of data can I put into my variable?
We can put lots of stuff into it! For now, we'll focus on primitive datatypes (just one piece of data).

*/

// Strings
// Strings are strings of characters.

var spidey = "Peter Parker";
var daredevil = 'Matt Murdock';
var myStr = '';
console.log(typeof myStr);

var myName = "Narciso";
var mySurname = "Lobo";

// String concatenation - the adding together of two or more strings
var fullName = myName + " " + mySurname;

console.log(fullName);

// Numbers
// Numbers are numbers. Both floating point numbers and integers are considered number datatypes in JavaScript.

var myNum = 32;
var percentage = 50.5;

console.log(typeof myNum);
console.log(typeof percentage);

// Operators:
// + addition
// - subtraction
// * multiplication
// / division

// Booleans
// Booleans can have only one of two possible values - true or false.

var isSnowing = true;
var isNight = false;

var isCorrect = 2 + 2 == 4;
console.log(isCorrect);

isCorrect = 2 + 2 == 5;
console.log(isCorrect);

var age = 20;
var minimumAge = 21;

var isOldEnoughToDrink = age >= minimumAge;

console.log(isOldEnoughToDrink);

/*

Rules of naming variables:
1. No spaces
2. Cannot start with a number
3. Cannot contain a dash or hyphen

4. Naming convention for JavaScript: Camel Case.

*/

// Double equal signs test for loose equality
console.log("10" == 10);

// Triple equal signs test for strict equality
console.log("10" === 10);

/* 

Code Challenge: Create Variables
The purpose of this assignment it to get you used to figuring out what variables need to be created to solve a problem. 

Assignment: Using VS Code, create the project below, zip it, and submit it.

Directions:

Open VS Code and create a new file.
Save the new file with the right file type - this time, it's .js - and with the following naming convention: LastName_FirstName_JS_CreateVariables.
Create the following using what you learned about variables and data types, and submit the assignment.
MVP

The Story: A local theme park has a ride where the rider must be at least 42 inches tall to ride and is over the age of 10. They've hired the development agency you work at to build an app where once it measures a rider's height and age, can display whether the rider is tall enough and old enough to ride the rollercoaster. You've been tasked with building the variables for this app.

Step 1: Identify what variables are needed to determine if a rider can ride the rollercoaster.

Step 2: In VS Code, create those variables.

Step 3: In your same VS Code file, use comments to explain what the variables must be set to in order for the rider to ride. 

*/

var reqHeight = 42;
var reqAge = 10;

var riderHeight = 40;
var riderAge = 10;