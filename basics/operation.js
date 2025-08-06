// node operation

let a = 5;
let b = 10;

// performing addition and subtraction
console.log(a +b , " is the sum of a and b");
console.log(a - b, " is the difference of a and b");

// performing multiplication and division
console.log(a * b, " is the product of a and b");
console.log(a / b, " is the quotient of a and b");

// performing floor division
//! note: JavaScript does not have a built-in floor division operator like Python, but we can achieve it using Math.floor.
//! note: is liye tum hame sa Math.floor() ka use kar te ho jb bhi integer division integer kar na ho, in you js development journey.
console.log(Math.floor(12/5), " is the quotient of 12 and 5 rounded down to the nearest integer");

// performing modulus
console.log(a % b, " is the remainder of a divided by b");

// performing exponentiation
console.log(a ** b, " is a raised to the power of b");

// performing bitwise operations
//! note: man le tai he hm a = 5 (binary: 0101) and b = 10 (binary: 1010)
console.log(a & b, " is the bitwise AND of a and b");
//! note: 0101 & 1010 = 0000
console.log(a | b, " is the bitwise OR of a and b");
//! note: 0101 | 1010 = 1111
console.log(a ^ b, " is the bitwise XOR of a and b");
//! note: 0101 ^ 1010 = 1111
console.log(~a, " is the bitwise NOT of a");
//! note: ~x = -(x + 1) 
console.log(a << 1, " is a left shifted by 1");
//! note: 0101 << 1 = 1010
console.log(a >> 1, " is a right shifted by 1");
//! note: 0101 >> 1 = 0010 

// performing logical operations
console.log(a && b, " is the logical AND of a and b");
//! note: logical AND returns true if both operands are truthy
//! note: in js, non-zero numbers ko truthy man ta hai (considered).
console.log(a || b, " is the logical OR of a and b");
//! note: logical OR returns true if at least one operand is truthy
console.log(!a, " is the logical NOT of a");
//! note: logical NOT returns true if the operand is falsy
console.log(!!b, " is the double logical NOT of b");
//! note: double logical NOT converts a value to a boolean
//! note: !!x is used to convert x to boolean

// performing comparison operations
console.log(a == b, " is the equality check of a and b");
//! note: js is loosely data type check: equality check compares values but not types
console.log(a != b, " is the inequality check of a and b");
console.log(a === b, " is the strict equality check of a and b");
//! note: strict equality check compares both values and types
console.log(a !== b, " is the strict inequality check of a and b");
console.log(a > b, " is the greater than check of a and b");
console.log(a < b, " is the less than check of a and b");
console.log(a >= b, " is the greater than or equal to check of a and b");
console.log(a <= b, " is the less than or equal to check of a and b");

// performing assignment operations
a += b; // a = a + b
console.log(a, " is a after adding b");
b -= a; // b = b - a
console.log(b, " is b after subtracting a");
a *= b; // a = a * b
console.log(a, " is a after multiplying by b");
b /= a; // b = b / a
console.log(b, " is b after dividing by a");
a %= b; // a = a % b
console.log(a, " is a after modulus by b");
b **= a; // b = b ** a
console.log(b, " is b after exponentiation by a");
a <<= 1; // a = a << 1
console.log(a, " is a after left shifting by 1");
//! note: 0001 << 1 → 0010
//! note: left shifting by 1 is equivalent to multiplying by 2
b >>= 2; // b = b >> 1
console.log(b, " is b after right shifting by 1");
//! note: 0010 >> 1 → 0001
//! note: right shifting by 1 is equivalent to dividing by 2
a &= b; // a = a & b
console.log(a, " is a after bitwise AND with b");
b |= a; // b = b | a
console.log(b, " is b after bitwise OR with a");
a ^= b; // a = a ^ b
console.log(a, " is a after bitwise XOR with b");
b = !a; // b = NOT a
console.log(b, " is b after logical NOT of a");