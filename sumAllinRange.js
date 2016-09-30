// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.


'esversion:6';
function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var num = [];
  for (var i = min; i < max + 1; i++) {
    num.push(i);
  }
  var total = num.reduce(function(num, total) {
    return num + total;
  });
  return total;  
}
