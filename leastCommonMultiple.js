// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  var range = [],
      quot = 0,
      loop = 1,
      i, j;  
  arr = arr.sort(function(a,b) { 
    return b - a;
  });
  for (i = arr[0]; i >= arr[1]; i--) {
    range.push(i);
  }
  do {
    quot = range[0] * loop * range[1];
    for (j = 2; j < range.length; j++) {
      if (quot % range[j] !== 0) {
        break;
      }
    }
    loop++;
  } while (j !== range.length);
  return quot;
}
