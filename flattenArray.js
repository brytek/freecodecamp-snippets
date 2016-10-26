// Flatten a nested array, accounting for varying levels of nesting.

function flattenArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = [].concat.apply([], arr);
      flattenArray(arr);      
    } 
    arr = [].concat.apply([], arr);
  }
  return arr;  
}
