/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(limit) {
  var result = 1,
    a = 0,
    b = 1,
    stack = [],
    sum;
  while (result <= limit) {
    if (result % 2 !== 0) {
      stack.push(result);
    }
    result = a + b;
    a = b;
    b = result;
  }
  sum = stack.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  return sum;
}
