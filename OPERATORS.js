/**
* OPERATORS
*/

/**
* || tahendab VÕI (OR)
  && tahendab JA (AND)
  ! tahendab  EI (NOT)
*/

const a = 3;
const b = -2;

// || puhul peab uks pooltest olema TRUE, et statmenet ols TRUE
// jatkame kui a on suurem kui 0 voi b on suurem kui 0

console.log(a > 0 || b > 0); // TRUE

// && puhul peavad molemad  pooled olema TRUE, et stament oleks TRUE
// kui uks pooltest on FALSE on kogu statement FALSE
// jatkame kui a on suurem kui 0 ja b on suure kui 0

console.log(a > 0 && b > 0); // FALSE

// ! ouhul pooratakse vaartus umber vastama EI kysimusele.
// kui enne oli vaartus false, siis kasutades ! operaatorit on vastus nyyd true.

const isThisJavascript = true;
console.log(isThisJavascript); // TRUE
console.log('without ! operator',isThisJavascript); // TRUE
console.log('with ! operator',!isThisJavascript) // FALSE