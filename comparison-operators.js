

// ==
1 == 1; // true
1 == 2; // false
1 == "false"; // false
"a" == false; // false
2 == true; // false
true == 1; // true
1 == "1"; // true
false == "false" // false
0 == ""; // true

// !=
1 != 1; // false
1 != 2; // true
1 != "false"; // true
"a" != false; // true
2 != true; // true
true != 1; // false
1 != "1"; // false
false != "false" // true
0 != ""; // false

// >
1 > 0; // true
1 > true; // false
1 > false; // true
1 > "a"; // false
"a" > 1; // false
"5" > 1; // true
undefined > null; // false
[] > "abcd"; // false
{ a: 1} > 0; // false

// >=
1 >= 0; // true
1 >= true; // true
1 >= false; // true
1 >= "a"; // false
"a" >= 1; // false
"5" >= 1; // true
undefined >= null; // false
[] >= "abcd"; // false
{ a: 1} >= 0; // false

// <
1 < 0; // false
1 < true; // false
1 < false; // false
1 < "a"; // false
"a" < 1; // false
"5" < 1; // false
undefined < null; // false
[] < "abcd"; // false
{ a: 1} < 0; // false

// <=
1 <= 0; // false
1 <= true; // true
1 <= false; // false
1 <= "a"; // false
"a" <= 1; // false
"5" <= 1; // false
undefined <= null; // false
[] <= "abcd"; // false
{ a: 1} <= 0; // false


// ALWAYS USE === && !==
// === (no conversion, both datatype and value is checked)
1 === "1"; // false

// !== 
1 !== "1"; // true

5 === 5; // true
false == null; // false
"a" <= "ab"; // true
0 == null; // false
null == null; // true
undefined === []; // false
"abcd" == ["a", "b", "c", "d"]; // false
[] == []; // false
[] === []; // false
{ a: "abcd" } == { a: "abcd"} // false
{ a: "abcd" } === { a: "abcd"} // false

// !! (check if a value is truthy or falsy)
!!"abcd"; // true
