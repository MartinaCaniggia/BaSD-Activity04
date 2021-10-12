// For

//a
var numbers = ['one', 'two', 'three', 'four', 'five'];

for (var i = 0; i < 5; i++) {
  alert(numbers[i]);
}

//b
for (var i = 0; i < 5; i++) {
  alert(numbers[i].substring(0, 1).toUpperCase() + numbers[i].substring(1, 15));
}

//c
var sentence = '',
  separator = ' ';

for (var i = 0; i < 5; i++) {
  if (sentence) {
    sentence += separator;
  }
  sentence += numbers[i];
}

alert(sentence);

//d
var empty = [];

for (var i = 0; i < 10; i++) {
  empty[i] = i;
}

console.log(empty);
