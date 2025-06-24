// AND OR 

// AND - &&
true  && true // true
true  && false // false
false && true // false
false && false // false

// OR - ||
true  || true // true
true  || false // true
false || true // true
false || false // false


// NOT - !
!true  // false
!false // true

// truthy & falsy
// 0, "", NaN, null, undefined, false => falsy


0 && true || "abcd" && 5 // 5
0 || 5
5

// first falsy value in &&
let value = false && 0;
// last truthy value in &&
value = 5 && "abcd";

// last truthy value in ||
value = false || "something";
// last falsy value in ||
value = 0 || false;
