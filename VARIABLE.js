/**
* VARIABLE - muutuja
* A variable is a “named storage” for data.
* Muutuja on nimeline kontainer, mis hoiab andmeid, mida me vajame oma programmi sees.
*/


/**
* CONSTANT - konstantne
* To declare a constant (unchanging) variable, use const instead of let.
*
*/

const VOCALOIDName = 'Hatsune Miku';

/**
* LET
* To create a variable in JavaScript, use the let keyword.
*
*/

let message = '音ミクです!';
alert(message);

let VOCALOIDAge = 16;

/**
* SCOPE (var) - skoop
* Scope is the current context of your code.
* Codeblocks are in brackets ({}), which make scopes.
*/

function testfunction() {
    return null;
}

/**
* GLOBAL SCOPE - globaalne skoop
* Variables declared Globally (outside any function) have Global Scope.
* Global variables can be accessed from anywhere in a JavaScript program.
*/


/**
* LOCAL SCOPE - lokaalne skoop
* Variables defined inside a function are not accessible from outside the function.
*/

/**
* HOISTING
* Hoisting in JavaScript is a behavior where variable and function declarations are moved ("hoisted") to the top of their containing scope during the compilation phase, before the code is executed.
*/