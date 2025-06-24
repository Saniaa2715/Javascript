// traditional functions
// non parameterized
// non returning
function greet() {
    console.log("helloooooo");
    // IMPLICIT RETURN STATEMENT
}

const greetFn = greet;
greet();
greetFn();

// parameterized
// non returning
function greetPerson(name) {
    console.log(`helloooo ${name}`);
}

greetPerson(); // error | hellooooo | "" | helloooo undefined
greetPerson(1);
greetPerson("Aniruddha");

// non parameterized
// returning
function getGreeting() {
    return "heeloooooo";
}

const greeting = getGreeting();

function createGreeting(name) {
    const greeting = getGreeting();
    // EXPLICIT RETURN STATEMENT
    return `${greeting} ${name}`;

    console.log('greeting returned');
}

const createdGreeting = createGreeting('Mitali'); 
console.log(createdGreeting);


function createIntroduction(name, age) {
    return `Hi, my name is ${name}, I am ${age} yrs old`;
}

console.log(createIntroduction("A", 25));

// function expressions
// anonymous functions

// function keyword
const add = function(n1, n2) {
    return n1 + n2;
}

add(10, 15);


// fat arrow fn
// =>
const subtract = (n1, n2) => {
    return n1 - n2;
}

// 1. 1 parameter => can omit the ()
// 2. 1 statement => can omit the {} => return becomes implicit
const multiplyBy5 = num => num * 5;
