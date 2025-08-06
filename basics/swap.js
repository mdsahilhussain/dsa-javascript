// node swap

let a = 5;
let b = 10;
// Using a temporary variable
let temp = a; // temp: 5, a:5
a = b; // a: 10, b: 10
b = temp; // b: 5, temp: 5
console.log(`After swap: a = ${a}, b = ${b}`);

let num1 = 15;
let num2 = 20;
// Using arithmetic operations
num1 = num1 + num2; // num1: 35, num2: 20
num2 = num1 - num2; // num2: 15, num1: 35
num1 = num1 - num2; // num1: 20, num2: 15
console.log(`After swap: num1 = ${num1}, num2 = ${num2}`);

let x = 25;
let y = 30;
// Using destructuring assignment
[x, y] = [y, x];
console.log(x, y, "After swap using destructuring assignment");

//! What is Copying in JavaScript?
//? In JavaScript, primitive types (number, string, boolean, null, undefined, symbol, bigint) are copied by value.
//? But non-primitive types (object, array, function) are copied by reference — unless you explicitly make a copy.