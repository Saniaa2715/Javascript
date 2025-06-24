const name = "Purva";
const greeting = "Helloooooooo";

// + (ES5 way) (AVOID)
let fullGreeting = greeting + "      " + name;

// template literal (KEEP USING THIS)
fullGreeting = `${greeting} ${name}`;

// properties of a string
// length
//            0123
const word = "nose";
word.length; // 4

// characteristic
word[0]; // n
word[0] = "p"; // FAILS SILENTLY (immutability)

// methods

const sentence = "this is sentence";

// indexOf => 
sentence.indexOf("abcd"); // -1
sentence.indexOf("e"); // 9

// includes
sentence.includes("ent"); // true

// split
sentence.split(" "); 
// ["this", "is", "sentence"]

const csv = `
name|surname|age
abc|pqr|20
`;

csv.split("|");
// ["\nname", "surname", "age\nabc", "pqr", "20\n"]

csv.at(0);
