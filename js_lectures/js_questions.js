/*

Code Challenge: Return

Directions: 

For each code snippet, create a T-diagram. 
Create a single text document or photograph of your T-Diagrams that contains the 10 T-diagrams for the code snippets below and submit it.

*/

// 1.
function hello() {
  console.log('hello');
}
hello();
console.log('Dojo');

// 2.
function hello() {
  console.log('hello');
  return 15;
}

var result = hello();
console.log('result is', result);

// 10.
function sumNums(num1, num2) {
  var sum = num1 + num2;
  console.log('sum is', sum);
  return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

/* Code Challenge: Parameters
Using what you've learned about functions and parameters, create a function that, given a name, will say "good day" to that person by name.

For example, the function call greet("Anakin") would log to the console, Good day, Anakin!

Level 2: Further customize your function by including the time of day in your greeting. Hint: can functions only take one parameter?

Level 3: You and Count Dooku have beef. Further customize your code to to say, "I'm coming for you, Dooku!" if your function is called with "Count Dooku".

Create a function that, given a name, will say "good day" to that person by name.

Further customize your function by including the time of day in your greeting.

Further customize your code to to say, "I'm coming for you, Dooku!" if your function is called with "Count Dooku". */

function greet(timeOfDay, nameInput) {
  console.log("Good", timeOfDay, nameInput + "!");
}

greet("morning", "Anakin");

function greet2(nameInput){
  console.log("Good day", nameInput);
  console.log(new Date())
}
greet2("Narciso")

function greet3(timeOfDay, nameInput) {
  if (nameInput == "Count Dooku") {
    console.log("I'm coming for you Dooku!");
  } else {
    console.log("Good", timeOfDay, nameInput + "!");
  }
}

greet3("evening", "Count Dooku");