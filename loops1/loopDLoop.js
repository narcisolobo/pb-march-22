/* MVP Story: 

A local fitness coach and mechanical engineer are building an IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill but stops giving candy out at mile 6. We're tasked with building the loop functionality to know when to give a piece of candy and when to stop.

Step 1: Using comments in your VS Code, answer the following questions: 

Q: How do we know we need a loop here? 
A: We are repeating tasks

Q: What's the starting point of the loop?
A: It should start at 0

Q: When should the loop stop?
A: At mile 6

Q: How will it know to stop?
A: From the boolean expression of our loop setup

Q: What's the incrementing for each iteration of the loop?
A: The miles increase by 1

Q: What variables do we need?
A: miles for now

NOTE --> the above list of questions is a great tool to help you break down building a loop. Moving forward, you will be expected to know to ask those questions on your own. 

Step 2: Build out the loop.

Step 3: Save and submit.

Stretch Feature 1

Create a new loop where the runner only gets a piece of candy at every 2 miles AND if they were going more than 5.5 miles per hour. */

// Version 1:
// for(var miles = 0; miles <= 6; miles++) {
//   if (miles % 2 == 0 && miles > 0) {
//     console.log('mile no:', miles);
//     console.log("Here's your candy, bro!");
//   }
// }

// Version 2:
var mph = 5.6;
for (var miles = 0; miles <= 10; miles++) {
  if (miles > 0 && miles <= 6 && miles % 2 == 0 && mph > 5.5) {
    console.log('mile no:', miles);
    console.log("Here's your candy, bro!");
  }
}