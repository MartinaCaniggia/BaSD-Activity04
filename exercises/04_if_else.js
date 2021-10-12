// If-Else

//a
var examNote = Math.random();
if (examNote > 0.5) {
  console.log('Greater than 0,5');
} else {
  console.log('Lower than 0,5');
}

//b
var age = 24;

if (age < 2) {
  console.log('Bebé');
} else if (age >= 2 && age <= 12) {
  console.log('Nino');
} else if (age > 12 && age <= 19) {
  console.log('Adolescente');
} else if (age > 19 && age <= 30) {
  console.log('Joven');
} else if (age > 30 && age <= 60) {
  console.log('Adulto');
} else if (age > 60 && age <= 75) {
  console.log('Adulto mayor');
} else {
  console.log('Anciano');
}
