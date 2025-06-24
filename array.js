const array = [10, 20, 30, 40, 50];

// access values
array[0]; // 10
array[4]; // 50
array[-1]; // undefined
array[5]; // undefined

// modify values
array[0] = 11;
// [11, 20, 30, 40, 50];

array[100] = 2000; // error, index out of bound

// property
const length = array.length; // 101

// methods
const numbers = [10, 20, 30, 40, 50];

// add elements
// push -> 6
numbers.push(60);
// [10, 20, 30, 40, 50, 60];

// unshift -> 7
numbers.unshift(0);
// [0, 10, 20, 30, 40, 50, 60];

// splice (starting index, elements to delete, elements we want to add)
numbers.splice(3, 0, 25);
// [0, 10, 20, 25, 30, 40, 50, 60];

// remove elements
// pop -> 60
numbers.pop();
// [0, 10, 20, 25, 30, 40, 50];

// shift -> 0
numbers.shift();
// [10, 20, 25, 30, 40, 50];

numbers.splice(2, 1);

const nums = [];
nums.push(10, 20, 30);
nums.unshift(0, 5);
nums.splice(2, 3, 45);

// come back here after functions


// characteristics
// cloning
const hemasFriends = [];
hemasFriends.push({ name: "Vandith", number: 123457890 });
hemasFriends.push({ name: "Ishan", number: 9876543210 });

// const rahulsFriends = hemasFriends;
// SHALLOW clone / copy
const rahulsFriends = hemasFriends.slice();
rahulsFriends.push({ name: "Aniruddha", number: 678901234 });


// destructuring
const computer = ["i7", "16GB", "Lenovo"];
// const processor = computer[0];
// const ram = computer[1];
// const brand = computer[2];

const [processor, ram, brand] = computer;
const { 1: ra, 0: p } = computer;
const [ , , make] = computer;
const [, r] = computer;

// ... rest operator (can only be used as the last element in destructuring)
// combines multiple values into an array

const [, ...ramAndMake] = computer;
// const [...rest, brand] = computer; // NOT GOING TO WORK

const anotherArray = [1,2,3]
// ... spread operator [SHALLOW COPY]
const computerClone = [...computer, ...anotherArray];
