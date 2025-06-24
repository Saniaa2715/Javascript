// number

const integer = 10;
const negativeNumber = -10;
const double = 10.05;
const nan = NaN;

typeof integer; // number
typeof negativeNumber; // number
typeof double; // number

console.log(typeof integer);

// string
// a-z, 0-9, symbols
// enclosed in "", '', ``
const doubleQuotedStr = "this is a double quoted str 10";
const singleQuotedStr = 'this is a single quoted str 15';
const backTickedString = `this is a back ticked str`;

// boolean
const isHungry = false;
const isSleepy = false;
const hadLunch = false;

// undefined
// DO NOT EVER DO THIS
const undef = undefined;

// null (pseudo datatype)
// DO NOT EVER DO THIS
const nullVar = null;

// collection datatypes
// arrays []
const numbers = [1, 2, 3, 4];
const person = [
    "Aniruddha",
    30,
    false,
    undefined,
    null,
    NaN,
    [1, 2, 3, 4, 5],
    { city: "Pune", country: "IN" },
    function () {
        console.log('kasjkads')
    }
]

// object
const personObj = {
    name: "Aniruddha",
    age:  30,
    isHungry: true,
    brains: undefined,
    peace: null,
    friends: ["A", "B", "C", "D"],
    address: {
        city: "Pune",
        country: "In"
    },
    eat: function() {
        console.log('nom nom nom');
    }
}

// function
function greet() {
    console.log('heellooooo');
}

typeof greet; // function
