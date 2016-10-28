// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  var len = collection.length;
  var falsey = [0, null, false, '',"", undefined];
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < falsey.length; j++) {      
      if (collection[i][pre] == falsey[j] ||
          Number.isNaN(collection[i][pre])) {
        return false;
      }
    }
  }
  return true;
}
