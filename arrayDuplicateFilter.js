// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  var joined = [];  
  for (var i = 0; i < arguments.length; i++) {
    joined.push(arguments[i]);
  }  
  var flat = joined.reduce(function(a, b) {
    return a.concat(b);
  }, []);  
  arr = flat.filter(function(elem, pos) {
    return flat.indexOf(elem) == pos;
  });  
  return arr;  
}
