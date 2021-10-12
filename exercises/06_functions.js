//Functions

//a
var number = 4;
var anotherNumber = 3;

function add(n1, n2) {
  return n1 + n2;
}

var sum = add(number, anotherNumber);
console.log(add(4, 3));

//b
function secondAdd(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  } else {
    return NaN;
  }
}

console.log('sum', secondAdd(4, 3));
console.log('NaN', secondAdd(4, '3'));

//c
function validateInteger(integer) {
  if (typeof integer === 'number' && number.isInteger(integer)) {
    return false;
  } else {
    return true;
  }
}

console.log(validateInteger('not a number'));
console.log(validateInteger('3'));

//d
function thirdAdd(n1, n2) {
  if(validateInteger(n1) && validateInteger(n2)) {
    return n1 + n2;
  } else if (validateInteger(n1)){
    alert('alert:' + n1 + 'integer');
    return NaN;
  }else {
    alert('alert:' + n2 + 'not integer');
    return NaN;
  }

console.log(thirdAdd(4, '3'));

//e
function validate(numberE) {
  if(typeof numberE === 'number'){
    return true;
  }else {
    return false;
  }
}

function fourthAdd(n1, n2) {
  if(validate(n1) && validate (n2)) {
    return n1 + n2;
  } else {
    return NaN;
  }
}

console.log(fourthAdd(4, 3));
console.log(fourthAdd(4, '3'));