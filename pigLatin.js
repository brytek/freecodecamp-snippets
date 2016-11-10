/* 
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  
	var vowels = ["a","e","i","o","u"],
		split = str.split(""),
		indices = [],
		i = 0,
		index, cut, pigLatin;

	while (i < vowels.length) {
		indices.push(str.indexOf(vowels[i]));
		i++;
	}
	
	index = indices.sort().find(function(elem) {
		return elem > -1;
	});
	
	if (vowels.indexOf(str[0]) !== -1) {
		pigLatin = str + "way";
	} else {
		cut = split.splice(index);
		split = cut.concat(split);
		pigLatin = split.join("") + "ay";
	}

	return pigLatin;
}
