/*

Countdown by Fours
Log positive numbers starting at 2022, counting down by fours (exclude 0), with a FOR loop.

*/

for (var i = 2022; i > 0; i-=4) {
  console.log(i)
}

/*

Stretch Challenge #1
HINT: GENERIC AND VERSATILE
Flexible Countdown
Based on earlier “Countdown by Fours”, given highNum, lowNum, and mult, print multiples of mult from highNum down to lowNum, using a FOR loop. For (9, 2, 3), print 9 6 3 (on successive lines).

*/

function flexibleCountdown(highNum, lowNum, mult) {
  for(var i = highNum; i > lowNum; i--) {
    if (i % mult == 0) {
      console.log(i);
    }
  }
}

flexibleCountdown(10, 2, 3);

/*
Stretch Challenge #2
The Final Countdown
This is based on “Flexible Countdown”. The problem is essentially identical! Given 4 parameters (highNum, lowNum, mult, skip), print the multiples of mult, starting at highNum and extending to lowNum. One exception: if a multiple is equal to skip, then skip (don’t print) it. Do this using a WHILE or a FOR. Given (17, 5, 3, 9), print 15, 12, 6 (which are all of the multiples of 3 between 17 and 5, and excluding the value 9).

*/

function flexibleCountdownWithSkip(highNum, lowNum, mult, skip) {
  while (highNum > lowNum) {
    if (highNum != skip) {
      if (highNum % mult == 0) {
        console.log(highNum);
      }
    }
    highNum--;
  }
}

flexibleCountdownWithSkip(100, 0, 3, 60);

// WHILE LOOPS
// While loops are like deconstructed for loops.
// 1. A sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}