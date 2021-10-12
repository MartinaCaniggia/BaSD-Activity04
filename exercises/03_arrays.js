// Arrays

//a
var months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

console.log(months[4]);
console.log(months[10]);

//b
var monthsAlphabetically = months.sort();

console.log(monthsAlphabetically);

//c
var addMonths = months.push('Friday');
var addMonths = months.unshift('Monday');

console.log(addMonths);

//d
var suprMonths = months.pop();
console.log(suprMonths);

var suprMonths = months.shift();
console.log(suprMonths);

//e
var revMonths = months.reverse();

console.log(revMonths);

//f
var jointMonths = months.join('-');

console.log(jointMonths);

//g
var months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

var sliceMonths = months.slice(4, 11);

console.log(sliceMonths);
