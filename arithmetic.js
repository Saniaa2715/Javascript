const num1 = 10;
const num2 = 2;

// addition +
const addition = num1 + num2;
// 12

// subtraction -
const diff = num1 - num2;
// 8

const product = num1 * num2;
// 20

const quotient = num1 / num2;
// 5

const remainder = num1 % num2;
// 0

const power = num1 ** num2;
// 100

parseInt(7 / 2); // 3
parseFloat(7 / 2); // 3.5

parseInt("3"); // 3
parseFloat("3.77"); // 3.77
parseInt("a"); // NaN
parseInt("kj34h5kjn"); // NaN
parseInt("345akjshkja"); // 345

// ceil
Math.ceil(3.1); // 4
Math.ceil(3.9); // 4

// floor
Math.floor(3.1); // 3
Math.floor(3.9); // 3

// round
Math.round(3.1); // 3
Math.round(3.9); // 4

// random
Math.random(); // 0 to 1, excluding 0 and 1

// 0.01 * 5 = 0.05 = 0 = 10
// 0.1 * 5 = .5  = 1 = 11
// 0.5 * 5 = 2.5 = 3 = 13
// 0.9 * 5 = 4.5 = 5 = 15

const min = 10;
const max = 15;

Math.round((Math.random() * (max - min)) + min);

const num = 4;

num.toString();

Number.prototype.length = function () {
    // code...
}
