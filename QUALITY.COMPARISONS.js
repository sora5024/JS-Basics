/**
* EQUALITY COMPARISON
* == VS ===
  == vordleb omavahel vaartusi
  === vordleb omavahel vaartusi ning andmetyype
*/

console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(1 === true); // false
console.log(Object.is(5, '5')) // false wow :D
console.log('mish mish');

/**
* TYPE CONVERSION / COERCION
*/

console.log(5 + '5');
console.log(5 + 5);
let number = 5
let number2 = '5'
console.log(number + 5)
console.log(number2 + 5)
console.log(5 + Number('5'))
console.log(5 + Number('meow'))

/**
* TYPEOF OPERATOR
  tagastab meile antud vaartuse andmetuubi
*/

console.log(typeof 'meow');
console.log(typeof meow);
console.log(typeof 9);