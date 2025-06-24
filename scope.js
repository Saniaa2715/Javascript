
// // GLOBALLY SCOPED
// // pollutes the window object
// surname = 'abcd';
// var nickname = 'pqrs';
// // does NOT pollute the window object
// let petname = 'lkj';
// const lastname = 'kjsfd';

// // LOCALLY SCOPED
greet()
function greet () {
    // pollute the window object
    // greeting = 'abcd';
    // Locally scoped, do NOT pollute the window
    // not available outside of the function
    var greeting = 'abcd'
    let greetMessage = 'abcd';
    const greetMsg = 'abcd'
}

// // leaks to parent scope
// for(var count = 0; count < 5; count++) {
//     setTimeout(() => {
//         console.log(count);
//     }, 0);
// }
// console.log(count);

// // let is BLOCK scoped
// for(let count = 0; count < 5; count++) {
//     setTimeout(() => {
//         console.log(count);
//     }, 0);
// }
// // not available here
// console.log(count);


// hoisted and accessible
'use strict'
something = 'abcd';
var naam = 'abcd';
// hoisted, not accessible => Temporal Dead Zone (TDZ)
let surname = 'pqrs';
const petname = 'kjad';
console.log(surname, petname);
