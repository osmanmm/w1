var originalWords = process.argv.slice(2);
let arg = process.argv;
var pigLatinWords = [];
console.log('originalWords', originalWords);
console.log('arg',arg);
for (var i = 1; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}



function translateToPigLatin(word) {
  return word.slice(2, word.length) + word[0] + "ay";
}
console.log(pigLatinWords.join(' '));