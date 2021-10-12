// Strings

//a
var wordOne = 'Hello World';
var upperCaseWord = wordOne.toUpperCase();

console.log(upperCaseWord);

//b
var wordTwo = 'Martina Caniggia';
var firstFiveLetters = wordTwo.substr(0, 5);

console.log(firstFiveLetters);

//c
var wordTwo = 'Martina Caniggia';
var lastThreeLetters = wordTwo.substr(13, 15);

console.log(lastThreeLetters);

//d
var firstText = 'my name is martina';
var firstLetter = firstText.substr(0, 1);
var restText = firstText.substr(1);
var textUpper = firstLetter.toUpperCase();
var restLower = restText.toLowerCase();
var textFinal = textUpper + restLower;

console.log(textFinal);

//e
var textIndex = 'Become a Software Developer';
var textIndexModif = textIndex.indexOf(' ');

console.log(textIndexModif);

//f
var longWords = 'beautiful holidays';
var textSpace = longWords.indexOf(' ');
var lower1 = longWords.substr(0, 9);
var lower2 = longWords.substr(10, 17);
var word1 = lower1[0].toUpperCase() + lower1.substr(1);
var word2 = lower2[0].toUpperCase() + lower2.substr(1);
var fullWord = word1 + ' ' + word2;

console.log(fullWord);
