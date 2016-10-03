// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. 

function myReplace(str, before, after) {
  
  str = str.split(' ');
  
  if (before[0] == before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  }
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === before) {
      str.splice(i, 1, after);
    }
  }

  str = str.join(' ');

  return str;
    
}
