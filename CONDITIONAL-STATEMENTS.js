/**
* CONDITIONAL STATEMENTS
* - if, else
    which statement
*/

/**
* if, else {}
*/

// too poest piima, kui on saia, too kaks.

const isThereBread = true;

if (true){
    console.log('2 piima')
}
    // kui if on TRUE siis kaivitame selle koodiploki.

else{
    console.log('Too poest 1 piim.')
}

// Termary operator, kuidas kirjutada if, else lauseid lyhidalt
// conditional ? true : false

console.log(isThereBread ? 'Toon poest 2 piima' : 'Toon poest 1 piima')

/**
* SWITCH STATEMENT
*/

const maximumRedBullPerDay = 3
let RedBullsDrankToday = 2;

switch(RedBullsDrankToday){
    case 1:
        console.log('lets gooo!!!!')
        break;
    case 2:
        console.log('still have room!!')
        break;
    case 3: 
        console.log('no more!')
        break;
    default:
        console.log('go doctor!')
        break;
}