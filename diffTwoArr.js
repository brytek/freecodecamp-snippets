// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

// In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  var catArr = arr1.concat(arr2).sort();
  for (var i = 0; i < catArr.length; i++) {
    if (arr1.indexOf(catArr[i]) == -1) {
      newArr.push(catArr[i]);
    }
  }
  for (var j = 0; j < catArr.length; j++) {
    if (arr2.indexOf(catArr[j]) == -1) {
      newArr.push(catArr[j]);
    }
  }
  return newArr;
}
