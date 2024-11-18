/**
* STRING
* A string is a sequence of textual characters.
  A string can be denoted using a pair of single quotes (''), or a pair of double quotes ("").
  The following code shows two strings:
*/

var lang = 'JavaScript';
var os = "Windows";

/**
* BOOLEANS
* A Boolean is simply a true or false value.
  In JavaScript, a Boolean is denoted using the literal values true and false.
  The following code creates two Boolean variables:
*/

var proceed = true;
var stopNow = false;

/**
* ARRAY
* An array could be denoted 'literally' using a pair of square brackets ([]).
  Each element of the array goes within the brackets, and is separated from another element using a comma (,). 
  Such an array, denoted directly using [], is called an array literal.
*/

var nums = [1, 5, 10];
let fruits = ['lemon','kiwi','melon','mango']
console.log(fruits[2]); // saame liigi vaartusele, mis on jadas indeksi 2.

/**
* FUNCTION
* A function defines a piece of code that gets executed when the function is called.
  In the code below, we create a function named sayHello to greet the user:
*/

function sayHello() {
    var name = prompt('Enter your name:');
    document.write('Hello, ' + name + '.');
 }

/**
* TYPEOF
* The typeof operator returns the data type of a given expression, as a string value.
  The expression comes after the operator as shown below:
*/

typeof expression

// Following we test it on different values to see what it returns in each case:

typeof 10; // 'number'
typeof 3.142; // 'number'

typeof "Hello"; // 'string'
typeof 'Hello'; // 'string'

typeof true; // 'boolean'

typeof undefined; // 'undefined'

/**
* UNDEFINED
* In JavaScript, undefined means "something exists but has no value yet." It's like an empty box waiting to be filled. 
  Example:
*/

let x; // x is declared but not given a value
console.log(x); // Output: undefined

/**
* BIGINT
* A BigInt in JavaScript is a special type for very big numbers. It lets you work with numbers larger than what Number can handle (bigger than 2^53 - 1)
  Example:
*/

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // Output: 123456789012345678901234567890n


/**
* NULL
* In JavaScript, null means "nothing" or "empty." It’s a value you can set to show that something is intentionally blank.
  Example:
*/

let x = null; // x has no value on purpose
console.log(x); // Output: null