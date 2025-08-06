// node math-function

// Math methods — very useful for numerical operations.

console.log(Math.round(10.1));
//! note: nearest integer deta hai. 10.1 → round → 10
console.log(Math.ceil(10.1));
//! note: upar wala integer return karta hai. 10.1 → ceil → 11
console.log(Math.floor(10.8));
//! note: neeche wala integer return karta hai. 10.8 → floor → 10
console.log(Math.trunc(18.98));
//! note:  sirf integer part leta hai (decimal hata deta hai). 18.98 → trunc → 18
console.log(Math.pow(10, 2));
//! note: 10² = 100
console.log(Math.sqrt(69));
//! note:  square root return karta hai.
console.log(Math.cbrt(10.3));
//! note:  cube root return karta hai.
console.log(Math.abs(10.3));
//! note: absolute value (positive version), -ve ko +ve convert karta hai, but +ve ko -ve me convert nhi karta hai.
console.log(Math.max(10, 30, 100, 2, 1, 5));
//! note: returns the largest number in the list
console.log(Math.min(10, 30, 100, 2, 1, 5));
//! note: returns the lowest number in the list
console.log(Math.random() * 4);
//! note: A random decimal between 0 and 4
console.log((10.3).toFixed(2));
//! note: returns a string rounded to given decimal places.

//! note : OTP system
console.log(Math.trunc(Math.random() * 9000 + 1000));
//? Math.random() * 9000 → gives a random number between 0 and 8999.999...
//? + 1000 → shifts the range → now it’s between 1000 and 9999.999...
//? A random 4-digit integer between 1000 and 9999
